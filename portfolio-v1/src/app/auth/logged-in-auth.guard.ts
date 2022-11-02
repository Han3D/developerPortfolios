import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.firebaseAuth.authState.pipe(
        first(),
        map(user => {
          if (user) {
            this.router.navigate(['/home']);
            return false;
          }
          return true;
        })
      );
  }
  
}
