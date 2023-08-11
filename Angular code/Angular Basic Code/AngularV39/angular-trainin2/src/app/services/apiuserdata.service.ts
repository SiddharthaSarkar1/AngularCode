import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiuserdataService {

  urlapi = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  myapidata: any;
  apiusers(){
    return this.http.get(this.urlapi);
    //this.myapidata = this.http.get(this.urlapi);
  }
  //this is for post api
  saveusers(data:any){
    return this.http.post(this.urlapi, data);
  }

}
