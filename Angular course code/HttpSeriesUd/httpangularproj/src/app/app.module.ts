import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadiocompbutComponent } from './radiocompbut/radiocompbut.component';
import { MyapicardComponent } from './myapicard/myapicard.component';
import { MydropdowComponent } from './mydropdow/mydropdow.component';

@NgModule({
  declarations: [
    AppComponent,
    RadiocompbutComponent,
    MyapicardComponent,
    MydropdowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
