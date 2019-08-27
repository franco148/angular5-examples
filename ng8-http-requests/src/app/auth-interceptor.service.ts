import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

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
    }
}