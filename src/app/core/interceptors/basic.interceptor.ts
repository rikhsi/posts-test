import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BasicInterceptor implements HttpInterceptor  {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const modifiedRequest = request.clone({
            url: `https://jsonplaceholder.typicode.com/${request.url}`
        });
        
        return next.handle(modifiedRequest);
    }
}