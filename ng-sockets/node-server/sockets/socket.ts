import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
};

export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: {from:string, body:string}) => {
        console.log('Client listening message event...', payload);

        io.emit('new-message', payload);
    });
};

export const newSocketUser = (client: Socket) => {
    client.on('configure-user', (payload: { name: string }, callback: Function) => {
        console.log('New user registered to the socket service... ', payload);
        callback({
            ok: true,
            message: `User '${payload.name}' configured successfully`
        });
    });
};
