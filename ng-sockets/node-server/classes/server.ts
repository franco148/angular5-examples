import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';

export default class Server {

    app: express.Application;
    port: number;

    io: socketIO.Server;
    private httpServer: http.Server;

    constructor() {
        console.log('Initializing the server...');
        this.app = express();
        this.port = SERVER_PORT

        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.listenSockets();
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
            console.log('client connected')
        });
    }
}