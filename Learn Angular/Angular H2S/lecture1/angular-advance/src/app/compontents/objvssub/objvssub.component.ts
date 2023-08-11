import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-objvssub',
  templateUrl: './objvssub.component.html',
  styleUrls: ['./objvssub.component.css']
})
export class ObjvssubComponent implements OnInit {

  observableData1 = '';
  observableData2 = '';
  subjectData1 = '';
  subjectData2 = '';

  constructor() { }

  ngOnInit(): void {
  }

  getObservableData(){
    let myObservable = new Observable<any>(observer => {
      observer.next(Math.floor(Math.random() * 99) + 1);
    });
    myObservable.subscribe(data => {
      this.observableData1 = data;
    });
    myObservable.subscribe(data => {
      this.observableData2 = data;
    });
  }

  getSubjectData(){
    let mySubject = new Subject();
    mySubject.subscribe((data:any) => {
      this.subjectData1 = data;
    });
    mySubject.subscribe((data:any) => {
      this.subjectData2 = data;
    });
    mySubject.next(Math.floor(Math.random() * 99) + 1);
  }

}
