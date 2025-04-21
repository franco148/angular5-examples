// How to handle errors in async pipe in Angular
// - Q1: How to handle errors in async pipe?

/**
 * Sometimes people usually implements the http calls incorrectly. EG:
 * 
 * export class AppComponent {
 *      users$ = this.http.get('http://localhost:3004');
 *      
 *      constructor(private http: HttpClient) {
 *      }
 * }
 * 
 * Then we usually have in the html side the following:
 * 
 * <h1> Angular interview </h1>
 * {{ users$ | async }}
 * <router-outlet></router-outlet>
 * 
 * Previous example is a huge problem. You should not use observables from HTTP like this inside your template
 * Why is that? Because it is not comfortable to handle errors there at all.
 * Secondly, it is difficult to transform data or find mistakes inside the code.
 * 
 * So what you want to do instead, you want to separete your things.
 * 
 * First of all, here I will add engine in it and inside we want to fetch our data.
 * 
 * But if you need to have observables instead of properties like users, because you say that it is much better
 * to store your data as a state inside your application. So, in order to do that, you can create a BehaviorSubject.
 * 
 * 
 * export interface UserInterface {
 *      id: string;
 *      name: string;
 * }
 * 
 * export class AppComponent implements OnInit {
 *      // users: UserInterface[] = [];
 *      users$ = new BehaviorSubject<UserInterface[]>([]); // Let's say by defaul it is empty array.
 *      isLoading$ = new BehaviorSubject<boolean>(false);
 *      
 *      constructor(private http: HttpClient) {
 *      }
 * 
 *      ngOnInit(): void {
 *          this.isLoading.next(true);
 *          this.http.get<UserInterface[]>('http://localhost:3004').subscribe(users => {
 *              // this.users = users; // 
 *              this.users$.next(users); // This is totally fine, now the html side is ok with | async
 *                                       // That is not the same as the first example, it is not an API call
 *                                       // It is just an array inside our observable.
 *              this.isLoading$.next(false);
 *          });
 *      }
 * }
 * 
 */












