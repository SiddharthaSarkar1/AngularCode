import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  headline = "Property Buinding";
  name = "PeterParker";
  //if show is true we will be able to see if block 
  show = true;
  //color is responsible to show multiple if else
  color = "green";
  colorSw = "xyz";
  users = ['Anil', 'Bhaskar', 'Sam', 'Peter', 'Kapil'];
  userDetails = [
    {
      name : 'Anil',
      email : 'anil@testmail.com',
      phone : '9850674345'
    },
    {
      name : 'Sunil',
      email : 'sunil@testmail.com',
      phone : '9857844345'
    },
    {
      name : 'Kapil',
      email : 'kapil@testmail.com',
      phone : '9858924345'
    },
    {
      name : 'Raju',
      email : 'raju@testmail.com',
      phone : '9850098745'
    }
  ];

  userArray = [
    {name:'Anil', phone:'1123', socialAccount:['facebook', 'Insta', 'Gmail']},
    {name:'Sam', phone:'7896', socialAccount:['youtube', 'Insta', 'Gmail']},
    {name:'Peter', phone:'2345', socialAccount:['Yahoo', 'Insta', 'Gmail']},
    {name:'Bruce', phone:'8764', socialAccount:['Linkedin', 'Insta', 'Gmail']}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
