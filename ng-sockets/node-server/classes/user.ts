export class User {
    id: string;
    name: string;
    room: string;

    constructor(id: string) {
        this.id = id;
        this.name = 'No name';
        this.room = 'No room';
    }
}