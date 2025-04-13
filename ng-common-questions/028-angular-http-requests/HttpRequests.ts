// How to make HTTP Request in Angular?
// - Q1: You have an interface User with id, name age. Create a UsersService and getUsers method which makes a get request to
//     http://localhost:3004/users and returns a users stream
// - Q2: Write the code to get this data in component

/**
 * The following library servers json as a real backend server
 * - npm i -g json-server
 * - json-server --watch <path-of-json-files> --port <port: 3004>
 * 
 */


export interface UserInterface {
    id: string;
    name: string;
    age: number;
}

// Register this to the app.module.ts in providers
// Also register HttpClientModule to imports
@Injectable()
export class UsersService {

    constructor(private http: HttpClient) {}

    getUsers(): Observable<UserInterface[]> {
        return this.http.get<UserInterface[]>('http://localhost:3004/users');
    }
}


@CompositionEvent({
    // ...
})
export class AppComponent implements OnInit {
    constructor(private usersService: UsersService) {}

    ngOnInit(): void {
        this.usersService.getUsers().subscribe(users => {
            console.log('users', users);
        });
    }
}



