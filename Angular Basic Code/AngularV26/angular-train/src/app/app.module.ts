import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { MyfromcompComponent } from './myfromcomp/myfromcomp.component';
import { RedElDirective } from './red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserDetailsComponent,
    ChildtwoComponent,
    UsdInrPipe,
    MyfromcompComponent,
    RedElDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
