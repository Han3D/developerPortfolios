import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { faUserTie, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faUserTie = faUserTie;
  faKey = faKey;
  passwordhide = true;
  loginForm!: FormGroup;

  // Errors
  loginError = false;
  loginErrorMessage = "";
  validFormError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  // Getters
  get emailControl() {
    return this.loginForm.get('emailControl');
  }
  get passwordControl() {
    return this.loginForm.get('passwordControl');
  }

  // Creates the login form
  createLoginForm() {
    this.loginForm = this.fb.group({
      emailControl: ['', [Validators.required]],
      passwordControl: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const userDetails = this.loginForm.value;
      console.log('✏️ ~ onLogin ~ userDetails', userDetails);

      const isAuthenticated = this.authService.login(
        userDetails.emailControl + "@han3dportfolio.com",
        userDetails.passwordControl
      );

      isAuthenticated
        .then((result) => {
          console.log("✏️ ~ .then ~ result", result);
          
          
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log('✏️ ~ isAuthenticated.then ~ err', err.message);
          // User feedback
          const errorMessage = err.message.replace("Firebase: ", "");
          this.loginErrorMessage = errorMessage;
          this.loginError = true;

          setTimeout(() => {
            this.loginError = false;
          }, 4000);

          // this.router.navigate(['/login']);
        });
    } else {
      // Lgin Form not valid
      this.validFormError = true;

      setTimeout(() => {
        this.validFormError = false;
      }, 4000);
    }
  }
}
