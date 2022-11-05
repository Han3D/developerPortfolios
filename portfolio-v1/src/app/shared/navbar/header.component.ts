import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      state('false', style({ height: 0, opacity: 0 })),
      state('true', style({ height: 60, opacity: 1 })),
      transition(
        'false => true',
        animate('500ms ease', style({ height: 60, opacity: 1 }))
      ),
      transition(
        'true => false',
        group([
          animate('500ms 250ms ease', style({ height: 0 })),
          animate('250ms ease', style({ opacity: 0 })),
        ])
      ),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  // private authState!: Subscription;
  showNavItems = false;

  @HostListener('window:resize', []) updateDays() {
    if (window.innerWidth >= 600) {
      this.showNavItems = true;
    } else {
      this.showNavItems = false;
    }
  }

  constructor(
    private authService: AuthService,
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (window.innerWidth >= 600) {
      this.showNavItems = true;
    }
    this.authService.currentAuthStatus.subscribe(
      (authStatus) => (this.isLoggedIn = authStatus)
    );

    // this.authState = this.firebaseAuth.authState.subscribe((user) => {
    //   if (user) {
    //     console.log('✏️ ~ header subscription ~ user', user);

    //     this.isLoggedIn = !!user;
    //   }
    //   return false;
    // });
  }

  /**
   * Toggles Navigation Items
   */
  toggleNavItems() {
    this.showNavItems = !this.showNavItems;
  }

  onLogout() {
    const isLoggedOut = this.authService.logout();

    isLoggedOut
      .then((logout) => {
        console.log('✏️ ~ onLogout ~ logout', logout);
      })
      .catch((err) => {
        console.log('✏️ ~ isLoggedOut.then ~ err', err);
      })
      .finally(() => {
        this.router.navigate(['login']);
      });
  }

  /* ngOnDestroy() {
    this.authState.unsubscribe();
  } */
}
