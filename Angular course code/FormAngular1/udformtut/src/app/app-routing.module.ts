import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { FirstComponent } from './first/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { PersonComponent } from './person/person.component';
import { SecondComponent } from './second/second.component';
import { StudentComponent } from './student/student.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {
    path: 'myhome',
    component: MyhomeComponent
  },
  {
    path:'myhomer',
    redirectTo: 'myhome',
    pathMatch: 'full'
  },
  {
    path: 'student',
    component: StudentComponent
  },
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'third', component: ThirdComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'person', component: PersonComponent},
  { path: '**', component: FourthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
