import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-train';
  data = 10;

  userDetails = [
    {
      name : "Anil Das",
      email : "anil@test.com"
    },
    {
      name : "Bimal Das",
      email : "bimal@test.com"
    },
    {
      name : "Kamoa Das",
      email : "kamal@test.com"
    },
    {
      name : "Sombhu Das",
      email : "sombhu@test.com"
    }
  ];

  updateChild(){
    this.data = Math.floor(Math.random()*10);
  }

  mydata = "data will show here.";
  updateData(item:string){
    console.warn(item);
    this.mydata = item;
  }

  name:any;


  getVal(item:any){
    console.warn(item);
  }

  mytitle = "Using Pipes in Angular";
  today = Date();

  userexmpl = {
    name : "Alok das",
    age : 28
  }
}
