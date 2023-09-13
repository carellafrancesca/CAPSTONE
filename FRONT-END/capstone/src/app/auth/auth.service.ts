import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterData } from '../interfaces/iregister-data';
import { ILoginData } from '../interfaces/ilogin-data';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IRegisterData[]>('http://localhost:8080/api/test/angular');
  }

  register(user:IRegisterData) : Observable<any> {
    return this.http.post(environment.urlRegister, user);
  }

  signin(user: ILoginData) {
    console.log(user);
    return this.http.post('http://localhost:8080/api/auth/login', user);
  }

  isAuth() {
    // return false;
    // return this.loggedIn;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 1000)
    })
  }

}
