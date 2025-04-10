// How to create custom types in Typescript?
// - Q1: How to create a custom type?
// - Q2: When does it make sense?

/** 
 * Q1:
 * We use TYPE keyword for example in the following example, we are creating a custom
 * type Foo, which is a string type at the end, but we can use it in the variable
 * declarations instead of string.
*/
export type Foo = string;

const foo: Foo = 'This is an example';


/**
 * Q2: For readability when we are using some complex objects
 */
export interface UserInterface {
    id: string;
    name: string;
    surname: string;
    age: number;
}

export type UserFullnameType = Pick<UserInterface, 'name' | 'surname'>;
export type UserPost = Omit<UserInterface, 'id'>;





















