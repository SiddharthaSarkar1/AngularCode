import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjectcmp',
  templateUrl: './subjectcmp.component.html',
  styleUrls: ['./subjectcmp.component.css']
})
export class SubjectcmpComponent implements OnInit {

  subject = new Subject<number>();

  constructor() { }

  ngOnInit(): void {
    this.subject.next(1);
    let subscriber1= this.subject.subscribe({
      next(value){
        console.log('subscriber1: '+value)
      }
    })
    this.subject.next(2);
    let subscriber2= this.subject.subscribe({
      next(value){
        console.log('subscriber2: '+value)
      }
    })
    this.subject.next(3);
    let subscriber3= this.subject.subscribe({
      next(value){
        console.log('subscriber3: '+value)
      }
    })
    setTimeout(() => {
      this.subject.next(4);
    }, 3000);
    
  }

}
