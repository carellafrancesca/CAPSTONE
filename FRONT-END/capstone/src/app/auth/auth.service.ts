import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterData } from '../interfaces/iregister-data';
import { ILoginData } from '../interfaces/ilogin-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment.development';
import { IAuthData } from '../interfaces/iauth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  headers = new HttpHeaders();
  private authSubject = new BehaviorSubject<null | IAuthData>(null)

  constructor(private http: HttpClient, private router: Router) { }

  register(user:IRegisterData) : Observable<any> {
    return this.http.post(environment.urlRegister, user);
  }

  login(user:ILoginData) : Observable<any> {
    return this.http.post(environment.urlLogin, user);
  }

  logout(){
    localStorage.removeItem('user');
    this.authSubject.next(null)
    this.router.navigate(['/login']);
  }

  getUsername(): string {
    const user = localStorage.getItem('userLogin');
      if (user) {
        const userData = JSON.parse(user);
        console.log(userData.username);
        return userData.username;
      } else {
        return '';
      }
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
