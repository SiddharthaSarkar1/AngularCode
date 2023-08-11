import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sid is learning Angular 12';
  data = "Hello core";

  getVal(){
    return "Learning code of Angular 12";
  }
  getName(name:string){
    alert("I am Siddhartha Sarkar. My nick name is "+name);
  }

  getData(val:any){
    console.log(val);
  }

  displayVal:string = "";
  getValue(val:string){
    console.log(val);
    this.displayVal = val;
  }
  count:number = 0;
  /* counter(type:string){
    type==='add' ? this.count++ : this.count--;
  } */

  counter(type:string){
    if(type == 'add'){
      this.count++;
    }else{
      if(this.count > 0){
        this.count--;
      }
    }
  }

}
