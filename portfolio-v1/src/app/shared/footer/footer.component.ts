import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { faLinkedin, faTwitter, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isLoggedIn: boolean = false;
  linkedIn = faLinkedin;
  twitter = faTwitter;
  github = faGithub;
  behance = faBehance;
  // private authState!: Subscription;

  constructor(private firebaseAuth: AngularFireAuth, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentAuthStatus.subscribe(authStatus => this.isLoggedIn = authStatus);
    /* this.authState = this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        console.log("✏️ ~ footer subscription ~ user", user);
        
        this.isLoggedIn = !!user;
      }
      return false;
    }); */
  }

  /* ngOnDestroy() {
    this.authState.unsubscribe();
  } */
}
