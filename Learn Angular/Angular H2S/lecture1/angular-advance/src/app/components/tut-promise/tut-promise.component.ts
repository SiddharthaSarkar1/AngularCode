import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tut-promise',
  templateUrl: './tut-promise.component.html',
  styleUrls: ['./tut-promise.component.css']
})
export class TutPromiseComponent implements OnInit {

  isOnline: boolean = false;
  status: string = "Offline";
  myPromise: any;

  constructor() { }

  ngOnInit(): void {
    this.getStatus();
    this.myPromise.then((res: any) => {
      console.log(res);
      this.checkLogic();
    },
    (err: any) => {
      console.log(err);
    });
  }

  getStatus(){
    console.log("Get status called.");
    this.myPromise = new Promise<boolean>((resolve,reject) => {
      setTimeout(() => {
        console.log("Received Status value.")
        this.isOnline = true;
        resolve(this.isOnline);
      }, 3000);
    })
  }
  checkLogic(){
    if(this.isOnline){
      this.status = "Online";
    }else{
      this.status = "Offline";
    }
  }
}
