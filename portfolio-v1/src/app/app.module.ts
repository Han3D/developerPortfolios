import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionsModule } from './auth/sections/sections.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from './auth/auth.module';

// Contacts
import { ContactComponent } from './contact/contact.component';
import { LoggingInterceptorService } from './shared/logging/logging-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    AuthModule,
    SectionsModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
