import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    if (!(!!this.username && !!this.password)) {
      this.errorMessage = 'Please fill all fields';
      return;
    }
    try {
      const result = await this.loginService.login({
        username: this.username,
        password: this.password,
      });
      if (result) {
        this.router.navigateByUrl('/home');
      } else {
        this.errorMessage = 'Invalid Login';
      }
    } catch (er) {
      this.errorMessage = 'Login Failed';
    }
  }

}
