import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Icomment } from 'src/app/interfaces/icomment';
import { IConcertData } from 'src/app/interfaces/iconcert-data';
import { CommentService } from 'src/app/services/comment.service';
import { ConcertService } from 'src/app/services/concert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singleconcert',
  templateUrl: './singleconcert.component.html',
  styleUrls: ['./singleconcert.component.scss']
})
export class SingleconcertComponent implements OnInit {

  username: string = '';
  concertDetails: IConcertData | undefined;
  comments: Icomment[] = [];
  eventId: number | undefined;

  constructor(
    private authSvc: AuthService, private userSvc: UserService,
    private route: ActivatedRoute, private concertSvc: ConcertService,
    private commentSvc: CommentService
  ){
    this.username = this.userSvc.getUsername();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const eventId = +params['id'];
      if (!isNaN(eventId)) {
        this.eventId = eventId;
        this.loadConcertDetails(eventId);
        this.loadComments();
      }
    });
  }

  loadConcertDetails(eventId: number) {
    this.concertSvc.getConcertById(eventId).subscribe(
      (concertDetails) => {
        this.concertDetails = concertDetails;
      },
      (error) => {
        console.error('Errore durante il recupero dei dettagli del concerto:', error);
      }
    );
  }

  loadComments() {
    if (this.eventId) {
      this.commentSvc.getCommentsByEventId(this.eventId).subscribe(
        (comments) => {
          this.comments = comments;
        },
        (error) => {
          console.error('Errore durante il recupero dei commenti:', error);
        }
      );
    }
  }

  /*deleteComment(commentId: number) {
    if (commentId) {
      this.commentSvc.deleteComment(commentId).subscribe(
        () => {
          this.comments = this.comments.filter(comment => comment.id !== commentId);
        },
        (error) => {
          console.error('Error deleting comment:', error);
        }
      );
    }
  }*/

  logout(){
    this.authSvc.logout()
  }

}
