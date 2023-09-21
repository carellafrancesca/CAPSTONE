import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Icomment } from '../interfaces/icomment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8080/api/comments';
  accessToken : string = '';
  comment!: Icomment;

  constructor(private http: HttpClient) {}

  sendComment(comment: Icomment, accessToken: string, eventId: number){
    const url = this.baseUrl + '/post/' + eventId;
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });
    const options = { headers: headers };
    return this.http.post(url, comment, options);
  }

  getCommentsByEventId(eventId: number){
    const url = this.baseUrl + '/concert/' + eventId;
    return this.http.get<Icomment[]>(url);
  }

  deleteComment(commentId: number){
    const url = this.baseUrl + '/' + commentId;
    return this.http.delete<void>(url);
  }

}
