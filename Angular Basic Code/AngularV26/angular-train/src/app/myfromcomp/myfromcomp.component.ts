import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myfromcomp',
  templateUrl: './myfromcomp.component.html',
  styleUrls: ['./myfromcomp.component.css']
})
export class MyfromcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userLogin(item:any){
    console.warn(item);
  }

  formLogin = new FormGroup({
    user:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  loginUser(){
    console.warn(this.formLogin.value);
  }

  get user(){
    return this.formLogin.get('user');
  }

  get password(){
    return this.formLogin.get('password');
  }

}
