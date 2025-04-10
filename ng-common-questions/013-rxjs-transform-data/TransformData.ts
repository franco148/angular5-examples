// How to transform data in RxJS?
// - Q1: You get such UserInterface. Define a function normalizeUsers which
// gets a parameter users$ which is an observable of UserInterface array
// and returns back an array of names as an observable.

export interface UserInterface {
    id: string;
    name: string;
    age: number
}

const normalizeUsers = (users$: Observable<UserInterface[]>): Observable<string[]> => {
    return users$.pipe(map(users = > users.map(usr => usr.name)));
};

// - Q2: How RxJS map differs from Javascript map?

/**
 * RxJs doesn't have map operator comparing with JavaScript, it will use pipe instead
 */