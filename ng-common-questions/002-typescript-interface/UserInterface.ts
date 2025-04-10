// - Q1: Define a UserInterface with id: string, name: string, age: number and method getMessage that returns string.
// - Q2: Write a usage example of this interface

export interface UserInterface {
    id: string;
    name: string;
    age: number;
    
    getMessage(): string;
}

// const user: UserInterface = {}; // This will show a compilation error saying it is an empty object.

const user: UserInterface = {
    id: '1',
    name: 'Franco',
    age: 30,

    getMessage() {
        return `${this.name} is ${this.age} years old`;
    }
};









