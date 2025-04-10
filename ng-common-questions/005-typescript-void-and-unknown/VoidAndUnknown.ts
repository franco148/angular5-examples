// What is void and unknown in Typescript?
// Q1: What is void type? Write an example
// Q2: What is unknown type? Write an example

// Q1: Function that doesn't return something
const doSomething = (): void => {
    console.log('doSomething');
    // return false; // This will not work, because void method
}

// Q2: Unkown
let vAny: any = 10;
let vUnkown: unknown = 10;

let s1:string = vAny;
let s2:string = vUnkown; // as string;

/**
 * It is highly recommended to use unknown when you are not sure what
 * data type you have.
 * And here is one more important point why we must stick with using unknown and not any. 
 */

console.log(vAny.foo()); // It doesn't cause any error because it is ANY
console.log(vUnkown.foo()); // This causes an error, because we have an unknown data type

// It is better to use UNKNOWN because we will specify the data type it will be later, so it 
// doesn't happen with ANY









