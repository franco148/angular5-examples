import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";

const server = new Server();
server.app.use('/', router);

server.start(() => {
    console.log(`The web socket server is running at port: ${SERVER_PORT}`);
});