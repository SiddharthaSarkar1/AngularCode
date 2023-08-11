import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-advance';
  number1: number = 30;
  number2: number = 28;

  anotherFunction(){
    console.log("Hello from anotherFunction")
  }

  logToConsole(value: string){
    console.log("Hello Debugging!!!" + value)
    this.anotherFunction();
  }
}
