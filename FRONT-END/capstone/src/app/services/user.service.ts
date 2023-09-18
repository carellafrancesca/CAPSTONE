import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders();

  getToken(): string {
  const user = localStorage.getItem('userLogin');
    if (user) {
      const userData = JSON.parse(user);
      console.log(userData.accessToken);
      return userData.accessToken;
    } else {
      return '';
    }
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

  getUserId(): number | null {
    const user = localStorage.getItem('userLogin');
    if (user) {
      const userData = JSON.parse(user);
      return userData.userId;
    } else {
      return null;
    }
  }


}
