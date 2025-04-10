// What are generics in Typescript?
// - Q1: What are generics in Typescript?

/**
 * We can describe it in an easy way. If you see in the code something like array, then
 * open and close tag and we are providing inside the string.
 */

const arr: Array<string> = ['Foo'];

/**
 * Anothe scenario, is when we use obsevables, it is another typical usage
 * 
 * Q2: Is is useful for rehuse the code, in this case the data structures can work with different data types
 */

/**
 * Example1: Without specifying the data type
 * Since in the parameter we didn't specify the data type, it will be any.
 * 
 * In this case, it may not be important, since we are only spreading it. But we can see that the result
 * is also ANY. So this is not a good approach, we could leverage here generics in order to have stricter typing.
 */
const addId = obj => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    }
}

const user = {
    name: 'Jack'
};

const result = addId(user);

/**
 * CORRECT WAY WOULD BE
 */
const addId2 = <T>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    }
}

const user2 = {
    name: 'Jack'
};

const result2 = addId2(user2); // This is valid
const result3 = addId2<{ name: string}>(user2); // This is valid too