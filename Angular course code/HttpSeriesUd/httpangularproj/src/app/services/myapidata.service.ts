import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyapidataService {

  constructor(private http:HttpClient) { }

  gettingData(){
    return this.http.get('https://api.publicapis.org/entries');
  }
}
