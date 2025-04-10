// How to fix the following code?

// Assertion means that we are forcing TypeScript to take another type 
// or sometimes it is not forcing, but just guiding TypeScript to take 
// correct type. And we are doing that with the keyword which is called **AS**.
const getItem = (item: number | undefined) => {
    // return item.toString(); // This throws exception
    // return (item as number).toString(); // This solves, but is not good code.

    if(!item) {
        return null;
    }

    return item.toString();
};