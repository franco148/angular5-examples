// What are pros and cons of RxJS?
// - Q1: What is RxJS?

/**
 * It is a library for composing asynchronous and event-based programs by using observable
 * sequences. 
 * 
 * It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects)
 * and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling
 * asynchronous events as collections.
 * 
 * THIS IS A STREAM BASED LIBRARY WHICH ACTUALLY MEANS WE CAN TRANSFORM ANYTHING IN THE STREAM
 * YOU HAVE.
 */

// - Q2: What are pros and cons of RxJS?

/**
 * PROS
 * First of all, if we can represent anything with the streams, we can work with all them together.
 * 
 * CONS
 * First of all, the level of entrance inside this library is much higher in comparison to just plain
 * JavaScript. If you simply write, map and filter inside JavaScript, you are totally fine, but rxjs 
 * is much more difficult and stream programming can be difficult to grasp from the beginning.
 * 
 * And additionally to that RxJs is quite verbose. You will write lots of brackets, lots of different 
 * functions, combine those functions and this is not the cleanest code in the world that I saw.
 */

// - Q3: Why RxJS is important for Angular?

/**
 * The main point is that Angular is heavy based on a request, and it doesn't make any sense to write
 * your code without RxJs. Then your code will be more prone to errors and more verbose.
 * 
 * So essentially, using RxJs inside Angular is not a choice. You must do that in order to write angular
 * code in angular way. If you will try to write your code without RxJs, you will just fight against a 
 * framework and it won't do you any good.
 */








