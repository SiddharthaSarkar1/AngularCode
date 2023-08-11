import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tut-observable',
  templateUrl: './tut-observable.component.html',
  styleUrls: ['./tut-observable.component.css']
})
export class TutObservableComponent implements OnInit {

  data: number[] = [];
  count = 0;
  myObservable: any;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer) => {
      setInterval(() => {
        this.count++;
        this.data.push(this.count);
        if(this.count <= 10){
          observer.next(this.data);
        }else{
          observer.complete();
        }
      }, 1000);
    })
    }

    getData(){
      this.myObservable.subscribe((res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        console.log("Completed");
      }
      )
      console.log(this.data);
    }

}
