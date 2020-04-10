import express from 'express';
import { SERVER_PORT } from '../global/environment';

export default class Server {

    app: express.Application;
    port: number;

    constructor() {
        console.log('Initializing the server...');
        this.app = express();
        this.port = SERVER_PORT
    }

    start(callback: Function) {
        console.log('Starting the server ...');
        this.app.listen(this.port, () => {
            callback();
        });
    }
}