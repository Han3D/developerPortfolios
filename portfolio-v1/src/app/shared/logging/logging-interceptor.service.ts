import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';

@Injectable()
export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Den Request auch loggen
    console.log("HTTP Request: ", req);

    // Call durchführen und 
    return next.handle(req).pipe(
      tap((response) => {
        // Nur die Antwort loggen       
        if (response.type === HttpEventType.Response) {
          console.log("HTTP Response: ", response.body);
        }
      })
    );
  }
}
