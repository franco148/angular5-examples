import { User } from "./user";

export class UserList {
    private userList: User[] = [];


    addUser(user: User) {
        this.userList.push(user);
        //we may return the added user
        return user;
    }

    updateName(id: string, name: string) {
        this.userList.forEach(usr => {
            if(usr.id === id) {
                usr.name = name;
            }
        });
    }

    loggedUsers() {
        return this.userList.filter(usr => usr.name !== 'No name');
    }

    findUserById(id: string) {
        return this.userList.find(usr => usr.id === id);
    }

    findUsersByRoom(room: string) {
        return this.userList.filter(usr => usr.room === room);
    }

    removeUser(id: string) {
        const removedUser = this.findUserById(id);
        this.userList = this.userList.filter(usr => usr.id !== id);

        return removedUser;
    }
}