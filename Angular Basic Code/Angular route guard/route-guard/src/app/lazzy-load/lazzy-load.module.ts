import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazzyLoadRoutingModule } from './lazzy-load-routing.module';
import { LazzyLoadComponent } from './lazzy-load.component';


@NgModule({
  declarations: [
    LazzyLoadComponent
  ],
  imports: [
    CommonModule,
    LazzyLoadRoutingModule
  ]
})
export class LazzyLoadModule { }
