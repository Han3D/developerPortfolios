import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Angular material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

// Own components
import { DisplaymessageComponent } from './messages/displaymessage.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HeaderComponent } from './navbar/header.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { FooterComponent } from './footer/footer.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';

// Other components

@NgModule({
  declarations: [
    DisplaymessageComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    SectionHeaderComponent,
    FooterComponent,
    IconButtonComponent,
    NotFoundComponent,
    CircleChartComponent,
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
    MatIconModule,
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
    NotFoundComponent,
    MatIconModule,
    CircleChartComponent
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class SharedModule {}
