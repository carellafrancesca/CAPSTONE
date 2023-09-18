import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Icomment } from '../interfaces/icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8080/api/comments/';

  constructor(private http: HttpClient) {}

  createComment(concertId: number, userId: number, commentText: string): Observable<Icomment> {
    const url = this.baseUrl + 'concert/' + concertId + 'user/' + userId;
    const requestBody = {
      commentText: commentText
    };
    return this.http.post<Icomment>(url, requestBody);
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
