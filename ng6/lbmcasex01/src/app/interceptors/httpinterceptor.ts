import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

import {map,catchError} from 'rxjs/operators';

import {
   HttpEvent,
   HttpInterceptor,
   HttpHandler,
   HttpRequest,
   HttpResponse,
   HttpErrorResponse

} from '@angular/common/http';


@Injectable()

// Utility Class to Intecept Http calls

export class Interceptor implements HttpInterceptor{
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.info('-- Interceptor intercept() req.headers =', req.headers, ';');

     return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
            
          console.info('Event =', event, ';');
          if (event instanceof HttpResponse) {
            console.info('-- Interceptor intercept() event.body =', event.body , ';');
          }
        return event;
      }),
      catchError((err: any, caught) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            console.log('err.error =', err.error, ';');
          }
          return Observable.throw(err);
        }
      }));
  }
}