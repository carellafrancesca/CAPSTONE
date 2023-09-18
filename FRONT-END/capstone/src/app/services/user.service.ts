import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users/';
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

  getUsernameById(userId: number) {
    const url = this.baseUrl + userId + '/username';
    return this.http.get<string>(url);
  }

}
