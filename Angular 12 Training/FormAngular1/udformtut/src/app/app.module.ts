import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformcompComponent } from './reactiveformcomp/reactiveformcomp.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { StudentComponent } from './student/student.component';
import { HttptutcompComponent } from './httptutcomp/httptutcomp.component';
import { UserComponent } from './user/user.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { UseformbuilderComponent } from './useformbuilder/useformbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformcompComponent,
    MyhomeComponent,
    StudentComponent,
    HttptutcompComponent,
    UserComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    CompanyComponent,
    PersonComponent,
    UseformbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
