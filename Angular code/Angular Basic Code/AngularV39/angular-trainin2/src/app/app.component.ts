import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
import { ApiuserdataService } from './services/apiuserdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-trainin2';
   users:any;
  /*constructor(private userdata:UserdataService){
    console.warn(userdata.users());
    this.users = userdata.users();
  } */
  apiusers:any;
  constructor(private apiuserdata:ApiuserdataService){
    apiuserdata.apiusers().subscribe((data)=>this.apiusers = data)
  }
  userapi:any;
  getUserFormData(data:any){
    console.warn(data);
    this.apiuserdata.saveusers(data).subscribe((result)=>{
      console.warn(result);
    })
  }

}
