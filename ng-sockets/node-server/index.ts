import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";

const server = new Server();

server.start(() => {
    console.log(`The web socket server is running at port: ${SERVER_PORT}`);
});