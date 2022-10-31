import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  // { path: 'auth', component: SectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
