import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoggedInAuthGuard } from './auth/logged-in-auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SectionsComponent } from './auth/sections/sections.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: SectionsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard]},
  { path: 'contact', component: ContactComponent},
  { path: 'skills', component: SectionsComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: SectionsComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
