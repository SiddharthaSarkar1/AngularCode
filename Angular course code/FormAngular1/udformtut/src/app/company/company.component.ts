import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let myName = {fname: 'Siddhartha', lname: 'Sarkar'};

    localStorage.setItem("NameData", JSON.stringify(myName));
    localStorage.setItem("localData", "Siddhartha is my name");
    sessionStorage.setItem("sessionData", "Tukai is my nick name");

    console.log(JSON.parse(localStorage.getItem("NameData") || '{}' ));
    console.log(localStorage.getItem("localData"));
    console.log(sessionStorage.getItem("sessionData"));
  }

}
