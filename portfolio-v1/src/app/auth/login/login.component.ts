import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  // Errors
  loginError = false;
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
      emailControl: ['', [Validators.required, Validators.email]],
      passwordControl: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const userDetails = this.loginForm.value;
      console.log('✏️ ~ onLogin ~ userDetails', userDetails);

      const isAuthenticated = this.authService.login(
        userDetails.emailControl,
        userDetails.passwordControl
      );

      isAuthenticated
        .then((result) => {
          console.log("✏️ ~ .then ~ result", result);
          
          
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log('✏️ ~ isAuthenticated.then ~ err', err.message);
          this.router.navigate(['/auth']);
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
