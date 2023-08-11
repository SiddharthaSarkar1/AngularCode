import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tutai-comp',
  templateUrl: './tutai-comp.component.html',
  styleUrls: ['./tutai-comp.component.css']
})
export class TutaiCompComponent implements OnInit {

  title="This is inside tutai comp";
  //Using these two variables for Dynamic Styling
  color="red";
  bgColor = "yellow";

  userData:any = {};

  constructor() { }

  ngOnInit(): void {
  }
  updateColor(){
    this.color = "blue";
    this.bgColor = "pink";
  }
  resetColor(){
    this.color = "red";
    this.bgColor = "yellow";
  }

  getData(data:NgForm){
    console.warn(data);
    this.userData = data;
  }
  display = true;
  toggle(){
    this.display = !this.display;
  }

}
