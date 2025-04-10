// ConcatMap vs SwitchMap vs MergeMap vs Map vs ExhaustMap in RxJS
// - Q1: What is the difference between map, flatMap, mergeMap, concatMap, switchMap, exhaustMap

const example = (operator: any) => () => {
    from([0, 1, 2, 3, 4])
    .pipe(operator((x:any) => of(x).pipe(delay(500))))
    .subcribe(
        console.log,
        () => {},
        () => console.log(`${operator.name} completed`)
    );    
};

example(mergeMap)();   // It creates an observable for every single value, doesn't cancel last observable, it doesn't wait
example(flatMap)();    // This is the map, it was renamed
example(concatMap)();  // We are goint to see the delay.
example(switchMap)();  // Just getting 4 in this case, it cancels all previous observables
example(exhaustMap)(); // Oposite to switchMap, just getting 0



