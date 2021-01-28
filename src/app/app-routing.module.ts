import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },

  { path: 'user-profile', component: UserprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
