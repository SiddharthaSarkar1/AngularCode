import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styles: [
    `.custom {
      color: red;
    }`
  ]
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
