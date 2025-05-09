import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;
  submitted = false;
  isLoading = false;

  // User Feedback
  sendSuccess = false;
  sendError = false;
  validFormError = false;

  // Captcha
  siteKey!: string;
  captcha!: Subscription;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {
    this.siteKey = environment.recaptchaSitekey;
  }

  ngOnInit(): void {
    this.createContactForm();
  }

  // Getters
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get contactNumber() {
    return this.contactForm.get('contactNumber');
  }
  get message() {
    return this.contactForm.get('message');
  }

  // Creates the contact form
  createContactForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.pattern('[- +()0-9]+')]],
      message: ['', [Validators.required]],
    });
  }

  // Function sends the Message to the
  sendContactMessage() {
    this.submitted = true;
    // TODO: implement sending
    if (this.contactForm.valid) {
      this.isLoading = true;

      this.captcha = this.recaptchaV3Service
        .execute('sendMessage')
        .subscribe((token: string) => {
          console.debug(`Token [${token}] generated`);

          this.dataService
            .saveContactDetails(this.contactForm.value)
            .then(() => {
              this.isLoading = false;
              this.sendSuccess = true;
              setTimeout(() => {
                this.sendSuccess = false;
                this.submitted = false;
              }, 4000);
            })
            .catch((err) => {
              console.log('✏️ ~ sendContactMessage ~ err', err.message);
              this.isLoading = false;
              this.sendError = true;
              setTimeout(() => {
                this.sendError = false;
              }, 4000);
            })
            .finally(() => {
              this.contactForm.reset();
            });
        });
    } else {
      // Contact form is not valid
      this.validFormError = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.validFormError = false;
      }, 4000);
    }
  }

  ngOnDestroy() {
    if (this.captcha) {
      this.captcha.unsubscribe();
    }
  }
}
