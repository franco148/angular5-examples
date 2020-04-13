import { Socket } from "socket.io";
import socketIO from 'socket.io';
import { UserList } from "../classes/user-list";
import { User } from "../classes/user";

export const connectedUsers = new UserList();

export const connectUser = (client: Socket) => {
    const user = new User(client.id);
    connectedUsers.addUser(user);
};

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        connectedUsers.removeUser(client.id);
        console.log('Client disconnected');
    });
};

export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: {from:string, body:string}) => {
        console.log('Client listening message event...', payload);

        io.emit('new-message', payload);
    });
};

export const configureSocketUser = (client: Socket) => {
    client.on('configure-user', (payload: { name: string }, callback: Function) => {
        console.log('New user registered to the socket service... ', payload);
        connectedUsers.updateName(client.id, payload.name);
        callback({
            ok: true,
            message: `User '${payload.name}' configured successfully`
        });
    });
};
