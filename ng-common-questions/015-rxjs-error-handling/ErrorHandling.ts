// How to implement error handling in RxJS?
// - Q1: Create an Observable and add error handling to it
// - Q2: How will you write subscribe to be ready for an error?

export interface UserInterface {
    id: string;
    name: string;
    age: number
}

const normalizeUsers = (users$: Observable<UserInterface[]>): Observable<string[]> => {
    return users$.pipe(map(users = > users.map(usr => usr.name)), catchError(err => {
        console.log('err', err);
        // We should return something, since our method is marked with Observable type
        return of([]);
    }));
};

normalizeUsers(of([{id: '1', name: 'foo', age: 30}])).subscribe(res => {
    console.log('res', res);
});

/**
 * Another scenario, if the normalizeUsers function throws an exception and it is not
 * cathed by CATCHERROR funtion in RxJs, then we would need to catch after subscription,
 * and even we have like a FINALLY block, which is COMPLETE. Example
 */

normalizeUsers(of([{id: '1', name: 'foo', age: 30}])).subscribe({
    next: res => {
        console.log('res', res);
    },
    error: err => {
        console.log('err', err);
    },
    complete: () => {
        console.log('Complete...');
    }
});