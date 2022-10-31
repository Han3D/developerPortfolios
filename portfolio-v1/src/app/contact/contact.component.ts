import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  // User Feedback
  sendSuccess = false;
  sendError = false;
  validFormError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createContactForm();
  }

  // Getters
  get nameControl() {
    return this.contactForm.get('nameControl');
  }
  get emailControl() {
    return this.contactForm.get('emailControl');
  }
  get messageControl() {
    return this.contactForm.get('messageControl');
  }

  // Creates the contact form
  createContactForm() {
    this.contactForm = this.fb.group({
      nameControl: ['', [Validators.required]],
      emailControl: ['', [Validators.required, Validators.email]],
      messageControl: ['', [Validators.required]],
    });
  }

  // Function sends the Message to the
  sendContactMessage() {
    this.submitted = true;
    // TODO: implement sending
    if (this.contactForm.valid) {
      this.sendSuccess = true;
      setTimeout(() => {
        this.sendSuccess = false;
        this.submitted = false;
      }, 4000);
    } else {
      // Contact form is not valid
      this.validFormError = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.validFormError = false;
      }, 4000);
    }
  }
}
