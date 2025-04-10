// How does combineLatest operator work in RxJS?
// - Q1: Do you know combineLatest method?
// - Q2: Can you write an example?

const foo$ = of('foo');
const bar$ = of('bar');
const baz$ = of('baz');

combineLatest([foo$, bar$, baz$]).subscribe(res => {
    console.log('res', res); // it will show just an array combined. Like flapmap in java?
}); 

// combineLatest doesn't wait the observables fullfillet
// for waiting all we may need to use combineAll, but is not commonly used.


