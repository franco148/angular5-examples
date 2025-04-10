// How Subject and BehaviorSubject work in RxJS?
// - Q1: What is BehaviorSubject?

/**
 * Actually this is a possibility to create a stream to which you can later subscribe.
 * and there is also a possibility to update that stream
 * 
 * It is the possibility to use something like an observable so we can write that subscribe. But
 * also next we can simply update the value, and additionally to that, at any moment of our
 * time, we can get a current value from our behaviorsubject.
 */

// - Q2: What is the most common use case for BehaviorSubject in Angular?

// - Q3: How it differs from Subject?

/**
 * Actually we have not only behavior subject inside the rxjs, we also have subject, but actually 
 * subject is used much rarely
 * 
 * Subject doesn't hold an initial value. BehaviorSubject is more versatile
 */

export interface UserInterface {
    id: string;
    name: string;
    age: number
}

const users$ = new BehaviorSubject<UserInterface[]>([]);

// Simulating that the stream will be updated
setTimeout(() => {
    users$.next([{ id: '1', name: 'foo' }]);
}, 2000);

users$.subscribe(res => console.log(res));
users$.subscribe(res => console.log(res, users$.getValue()));