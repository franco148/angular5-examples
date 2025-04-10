// Cold vs hot observables - what is the difference?
// - Q1: What are cold and hot observables?

/**
 * Main thing to remember is that observables are lazy. They will be never executed if you
 * don't have a subscriber. This is why typically in Angular people are doing the problem with HTTP.
 * 
 * 
 */

const observable = new Observable(observer => {
    observer.next(Math.random());
});

observable.subscribe(data => console.log(data));
observable.subscribe(data => console.log(data));

/**
 * Previous example will return two different values.
 * 
 * This behavior is typically called Unicasting because our subscribers are not in sync.
 * This is why these are called observables. Why is that? Because essentially this value, this 
 * Math.random is inside our observable, and when we have the value inside observable, then we always
 * get called observables because all our values will be not in sync.
 * 
 * This is exactly why we are getting different random numbers when we have two subscribers, which
 * actually means all our subscribers will always get different values.
 * 
 * ACTUALLY WE MUST CONVERT OUR COLD OBSERVABLE TO HOT OBSERVABLE  in order for all our subscribers to
 * get the same value.
 */
const random = Math.random();
const observable2 = new Observable(observer => {
    observer.next(random);
});

observable2.subscribe(data => console.log(data));
observable2.subscribe(data => console.log(data));

