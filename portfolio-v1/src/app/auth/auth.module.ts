import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SectionsModule } from './sections/sections.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    SharedModule,
    SectionsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  exports: [LoginComponent],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }]
})
export class AuthModule {}
