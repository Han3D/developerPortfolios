import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { }

  public async login(email: string, password: string): Promise<any> {
    return await this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  public async logout(): Promise<void> {
    return await this.firebaseAuth.signOut();
  }
}
