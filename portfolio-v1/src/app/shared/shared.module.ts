import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Own components
import { DisplaymessageComponent } from './messages/displaymessage.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HeaderComponent } from './navbar/header.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { FooterComponent } from './footer/footer.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  ErrorStateMatcher,
  MatRippleModule,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DisplaymessageComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    SectionHeaderComponent,
    FooterComponent,
    IconButtonComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    FontAwesomeModule,
    MatRippleModule,
  ],
  exports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    FontAwesomeModule,
    DisplaymessageComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    SectionHeaderComponent,
    FooterComponent,
    IconButtonComponent,
    MatRippleModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class SharedModule {}
