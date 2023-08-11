import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route-guard';
  isLogin:boolean = false;
  constructor(public authservice: AuthService){}

  ngOnInit(){
    this.authservice.User.subscribe((data) => {
      if(data){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  }
  
  login(){
    let data = {
      username: "sid",
      password: "1234"
    }
    this.authservice.SignInUser(data);
  }

  logout() {
    this.authservice.SignOutUser();
  }
}
