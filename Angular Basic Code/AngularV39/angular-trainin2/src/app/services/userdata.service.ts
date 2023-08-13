import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      { 
       name:"Samol",
       age:25,
       email:"samol@test.com" 
      },
      { 
        name:"Anil", 
        age:28, 
        email:"anil@test.com" 
      },
      { 
        name:"pinaki", 
        age:34, 
        email:"pinaki@test.com" 
      },
      { 
        name:"Sonai", 
        age:29, 
        email:"sonai@test.com" 
      }
    ]
  }
}
