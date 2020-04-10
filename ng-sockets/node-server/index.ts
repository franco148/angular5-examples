import bodyParser from 'body-parser';
import cors from 'cors';

import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";

const server = new Server();
// Body-Parser configuration
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }))

// Endpoints Definition
server.app.use('/', router);

server.start(() => {
    console.log(`The web socket server is running at port: ${SERVER_PORT}`);
});