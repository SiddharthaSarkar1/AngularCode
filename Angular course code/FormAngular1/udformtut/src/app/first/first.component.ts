import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  myipval:string = 'none';
  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  clickingHere(){
    console.log("clicked");
  }

}
