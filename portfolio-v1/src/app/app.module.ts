import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from './auth/auth.module';

// Contacts
import { ContactComponent } from './contact/contact.component';
import { LoggingInterceptorService } from './shared/logging/logging-interceptor.service';
import { ImpressumComponent } from './impressum/impressum.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, ContactComponent, ImpressumComponent],
  imports: [AppRoutingModule, SharedModule, AuthModule, FontAwesomeModule, RecaptchaV3Module],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaSitekey },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
