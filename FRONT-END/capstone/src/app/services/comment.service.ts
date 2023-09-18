import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Icomment } from '../interfaces/icomment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8080/api/comments/';
  accessToken : string = '';
  comment!: Icomment;

  constructor(private http: HttpClient) {}

  postCommento(comment: Comment, accessToken: string): Observable<Comment> {
    const headers = new HttpHeaders({Authorization: `Bearer ${accessToken}`});
    const options = { headers: headers };
    return this.http.post<Comment>(
      `${this.baseUrl}`, comment, options
    );
  }

  getCommentsByEventId(eventId: number): Observable<Icomment[]> {
    const url = this.baseUrl + 'concert/' + eventId;
    return this.http.get<Icomment[]>(url);
  }

  sendComment(comment: Icomment): Observable<any> {
    const url = this.baseUrl;
    return this.http.post(url, comment).pipe(
      catchError((error) => {
        console.error('Errore durante il salvataggio del commento o post:', error);
        throw error;
      })
    );
  }

  deleteComment(commentId: number): Observable<void> {
    const url = this.baseUrl+ commentId;
    return this.http.delete<void>(url);
  }

}
