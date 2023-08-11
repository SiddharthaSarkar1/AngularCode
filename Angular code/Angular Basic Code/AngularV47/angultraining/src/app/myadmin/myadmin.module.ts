import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyadminRoutingModule } from './myadmin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MyadminRoutingModule
  ]
})
export class MyadminModule { }