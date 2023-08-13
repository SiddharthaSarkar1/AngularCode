import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazzyLoadComponent } from './lazzy-load.component';

const routes: Routes = [
  {
    path: "",
    component: LazzyLoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazzyLoadRoutingModule { }
