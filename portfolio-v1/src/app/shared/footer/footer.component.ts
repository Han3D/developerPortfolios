import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { faLinkedin, faTwitter, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkedIn = faLinkedin;
  twitter = faTwitter;
  github = faGithub;
  behance = faBehance;

  isLoggedIn!: boolean;
  private authState!: Subscription;

  constructor(private firebaseAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.authState = this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        console.log("✏️ ~ this.firebaseAuth.authState.subscribe ~ user", user);
        
        this.isLoggedIn = !!user;
      }
      return false;
    });
  }

}
