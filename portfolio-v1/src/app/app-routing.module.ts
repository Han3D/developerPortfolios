import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SectionsComponent } from './auth/sections/sections.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: SectionsComponent, canActivate: [AuthGuard] },
  { path: 'skills', component: SectionsComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: SectionsComponent, canActivate: [AuthGuard] },
  // { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
