import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DarklighttoggleComponent } from './components/darklighttoggle/darklighttoggle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TutPromiseComponent } from './components/tut-promise/tut-promise.component';
import { TutObservableComponent } from './components/tut-observable/tut-observable.component';
import { FormsModule } from '@angular/forms';
import { ObjvssubComponent } from './compontents/objvssub/objvssub.component';
import { SubjectcmpComponent } from './compontents/subjectcmp/subjectcmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DarklighttoggleComponent,
    TutPromiseComponent,
    TutObservableComponent,
    ObjvssubComponent,
    SubjectcmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
