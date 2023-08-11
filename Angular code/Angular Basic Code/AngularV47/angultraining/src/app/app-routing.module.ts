import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  { path : 'ulogin', component:LoginComponent },
  { path : 'signup', component:SignupComponent },
  { path : 'myadmin', loadChildren:()=>import('./myadmin/myadmin.module').then(mod=>mod.MyadminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
