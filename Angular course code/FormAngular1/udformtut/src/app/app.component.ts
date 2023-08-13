import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udformtut';

  answer = "";
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    query: '',
    gender: ''
  };

  userObject = {
    name: 'Pori Das',
    age: '18',
    id: 26
  }

  constructor(private router:Router){}

  submitted = false;

  onSubmit(form:NgForm){
    console.log(form);
    this.submitted = true;
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.query = form.value.questionAnswer;
    this.user.gender = form.value.gender;
    //form.reset();
  }



  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

  handlEven(event: any){
    console.log(event);
  }
}
