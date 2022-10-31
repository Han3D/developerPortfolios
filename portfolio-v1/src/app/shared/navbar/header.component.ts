import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  private authState!: Subscription;
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

    this.authState = this.firebaseAuth.authState.subscribe((user) => {
      if (user) {
        console.log('✏️ ~ this.firebaseAuth.authState.subscribe ~ user', user);

        this.isLoggedIn = !!user;
      }
      return false;
    });
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
        this.isLoggedIn = false;
        this.router.navigate(['login']);
      });
  }

  ngOnDestroy() {
    this.authState.unsubscribe();
  }
}
