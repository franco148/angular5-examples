// What is elvis operator in Typescript?
// - Q1: What is an elvis operator?
// - Q2: Write a common use case of elvis operator.

// Q1:
export interface UserInterface {
    id: string;
    name: string
}

/**
 * Having the previous interface, if we want to implement the following method
 * it will throw an compilation error saying that it can be User or Undefined.
 */
const getName1 = (user?: UserInterface): string => {
    return user?.name;
}


/**
 * How to fix previous issue? With elvis operator ??
 */
const getName2 = (user?: UserInterface): string => {
    return user?.name ?? 'Not set';
}









