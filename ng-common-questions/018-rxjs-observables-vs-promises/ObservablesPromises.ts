// Observables vs Promises - what is the difference?
// - Q1: What is the difference between observables and promises?

/**
 * So inside plain JavaScript or frameworks like, for example React or Vue were not using observables.
 * 
 * We're using typically promises because this is essentially what we need to do in order to work with API
 * 
 * We're writing something like fetch request to the API, we're getting data within or we catch an error
 * later, which actually means promise is something which is happening over long time, but at the end it 
 * only happens once.
 * 
 * Observable is a completely different thing. This is a stream of your data, which actually means this 
 * is something where we can get new data with time and then we can react with subscribe to this change 
 * of the data, and typically people who are coming from plain JavaScript or from React really don't 
 * want to use observables inside Angular just because they don't understand them. This is a problem because
 * essentially inside Angular you should almost never use promises, we're using everywhere just observables.
 * 
 * Why is that? Because we can represent anything in our application with observable. For example, a call
 * can be an observable, our mouse move on the screen can be observable, and working with behaviorSubject 
 * can also be an observable, which actually means we can combine different observables from different source of data.
 */

// - Q2: What to use in Angular?






