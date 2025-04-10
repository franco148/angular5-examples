// How filter works in RxJS?
// - Q1: Write an example of RxJS filter
// - Q2: How it differs from Javascript filter?

export interface UserInterface {
    id: string;
    name: string;
    age: number;
    isActive: boolean;
}

const getActiveUsers = (users$: Observable<UserInterface[]>): Observable<string[]> => {
    return users$.pipe(filter(users => users.every(user => user.isActive)));
};

const users$: Observable<UserInterface[]> = of([{id: '1', name: 'Jack', age: 30, isActive: true}]);

getActiveUsers(users$).subscribe(activeUsers => {
    console.log(activeUsers);
});

