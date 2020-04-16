import express from 'express';
import socketIO from 'socket.io';
import http from 'http';

import { SERVER_PORT } from '../global/environment';
import * as socket from '../sockets/socket';

export default class Server {

    private static _instance: Server;

    app: express.Application;
    port: number;

    io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        console.log('Initializing the server...');
        this.app = express();
        this.port = SERVER_PORT

        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.listenSockets();
    }

    public static get instance(): Server {
        return this._instance || (this._instance = new this());
    }

    start(callback: Function) {
        console.log('Starting the server ...');
        /* this.app.listen(this.port, () => {
            callback();
        }); */
        this.httpServer.listen(this.port, () => {
            callback();
        });
    }

    private listenSockets() {
        console.log('Listening conections - sockets');

        this.io.on('connection', client => {
            console.log('client connected id=', client.id);

            // Connect user
            socket.connectUser(client, this.io);

            // New connections
            socket.configureSocketUser(client, this.io);

            // Listening message event
            socket.message(client, this.io);

            /* client.on('disconnect', () => {
                console.log('Client disconnected')
            }); */
            // Disconnect
            socket.disconnect(client, this.io);
        });
    }
}