import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Request is on its way');
        // The request object is unmutable, so we can not do the following, it will not work
        // req.url = 'a new url';

        // So the previous one would be solved as follows
        // const modifiedRequest = req.clone({url: 'new urld', headers: req.headers.append('', '')});
        const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
        
        // return next.handle(req);
        return next.handle(modifiedRequest);

        // Response interceptor
        // return next.handle(modifiedRequest).pipe(tap(event => {
        //     // Here we can intercep a response
        //     console.log(event);
        //     if (event.type === HttpEventType.Response) {
        //         console.log('Response arrived, body data: ', event.body);
        //     }
        // }));
    }
}