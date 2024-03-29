import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const userMap = {
  admin: 'admin',
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login({ username, password }: { username: string; password: string }) {
    return this.http
      .post('login', {
        username,
        password,
      })
      .toPromise();
  }

}
