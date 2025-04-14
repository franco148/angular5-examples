// Unsubscribe in Angular - why is it important?
// - Q1: What is unsubscribe?
// - Q2: Why is it important?
// - Q3: What are the ways to unsubscribe?


/**
 * This is usually MEMORY LEAKS problems. So for example when we subscribe to something
 * in a component (let say we are using routings). Then we change to another component, 
 * the logic if it is stream of something, will still be executed (until the end of
 * the world), even if we change to another component.
 * 
 * There are lots of different ways to unsubscribe from your stream, and the most typical
 * way is by creating a Subscription.
 * 
 * 
 * 
 * export class UsersComponent implements OnInit, OnDestroy {
 *  data$ = interval(1000);
 *  dataSubscription?: Subscription;
 * 
 *  ngOnInit(): void {
 *      // this.data$.subscribe(data => {
 *      //    console.log('data', data);
 *      // });
 *      this.dataSubscription = this.data$.subscribe(data => {
 *          console.log('data', data);
 *      });
 *  }
 * 
 *  ngOnDestroy(): void {
 *      this.dataSubscription?.unsubscribe();
 *  }
 * }
 * 
 * 
 * EG1: Creating a Subscription: Line 20
 * 
 * EG2: Another variant is ASYNC pipe. Angular by itself will unsubscribe from the stream when
 *      the component is destroyed
 * 
 * export class UsersComponent implements OnInit, OnDestroy {
 *  data$ = interval(1000);
 * 
 *  ngOnInit(): void {
 *      // We can still subscribe with pipe, and take or takeWhile(a predicate here)
 *      this.data$.pipe(take(1)).subscribe(data => {
 *          console.log('data', data);
 *      });
 *  }
 * 
 *  ngOnDestroy(): void {
 *  }
 * }
 * 
 * We would only need to apply the changes in the .html file, but we need to declare the CommonModule
 * in our app.module in order to use pipes, for example:
 * 
 * Users {{ data$ | async }}
 * 
 * 
 * EG: TAKE UNTIL
 * 
 * export class UsersComponent implements OnInit, OnDestroy {
 *  data$ = interval(1000);
 *  unsubscribe$ = new Subject<void>();
 * 
 *  ngOnInit(): void {
 *      this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
 *          console.log('data', data);
 *      });
 *  }
 * 
 *  ngOnDestroy(): void {
 *      this.unsubscribe$.next();
 *      this.unsubscribe$.complete();
 *  }
 * }
 * 
 * 
 * EG: In case we don't want to have all previous code in the Component, we can move it
 *     to a service class.
 * 
 * @Injectable()
 * export abstract class Unsub implements OnDestroy {
 *  unsubscribe$ = new Subject<void>();
 * 
 *  ngOnDestroy(): void {
 *      this.unsubscribe$.next();
 *      this.unsubscribe$.complete();
 *  }
 * }
 * 
 * export class UsersComponent extends Unsub implements OnInit {
 *  data$ = interval(1000);
 * 
 *  ngOnInit(): void {
 *      this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
 *          console.log('data', data);
 *      });
 *  }
 * }
 */



