import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStatusSub = new BehaviorSubject<any>(null);
  currentAuthStatus = this.authStatusSub.asObservable();

  constructor(private firebaseAuth: AngularFireAuth) {
    this.authStatusListener();
  }

  authStatusListener() {
    this.firebaseAuth.onAuthStateChanged((credential) => {
      if (credential) {
        console.log(credential);
        this.authStatusSub.next(credential);
        console.log('User is logged in');
      } else {
        this.authStatusSub.next(null);
        console.log('User is logged out');
      }
    });
  }

  public async login(email: string, password: string): Promise<any> {
    return await this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  public async logout(): Promise<void> {
    return await this.firebaseAuth.signOut();
  }
}
