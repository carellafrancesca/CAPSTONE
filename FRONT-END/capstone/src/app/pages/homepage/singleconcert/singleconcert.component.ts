import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Icomment } from 'src/app/interfaces/icomment';
import { IConcertData } from 'src/app/interfaces/iconcert-data';
import { IUser } from 'src/app/interfaces/iuser';
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
  commentForm!: FormGroup;
  accessToken : string = '';

  /*user : IUser = { id: 0, email: '', name: '', surname: '', username: '' };
  comment: Icomment = { id: 0, author: this.user, commentText: '', commentDate: new Date(), eventId: 0 };
  */

  constructor(
    private authSvc: AuthService, private userSvc: UserService, private route: ActivatedRoute,
    private concertSvc: ConcertService, private commentSvc: CommentService, private formBuilder: FormBuilder,
  ){
    this.commentForm = this.formBuilder.group({
      commentText: ['', Validators.required],
      commentDate: [''],
    });
      /*this.commentSvc.postCommento(this.comment, this.accessToken).subscribe(
        (response) => {
          console.log(response);
          console.log('Prenotazione inviata con successo:', response);
        },
        (error) => {
          console.error("Errore durante l'invio della prenotazione:", error);
        }
      );*/
  }

  ngOnInit(): void {
    this.username = this.userSvc.getUsername();
    this.route.params.subscribe((params) => {
      const eventId = +params['id'];
      if (!isNaN(eventId)) {
        this.loadConcertDetails(eventId);
        //this.loadComments(eventId);
      }
    });
  }

  loadConcertDetails(eventId: number) {
    this.concertSvc.getConcertDetails(eventId).subscribe(
      (concertDetails) => {
        this.concertDetails = concertDetails;
      },
      (error) => {
        console.error('Errore durante il recupero dei dettagli del concerto:', error);
      }
    );
  }

  /*
  loadComments(eventId: number) {
    this.commentSvc.getCommentsByEventId(eventId).subscribe(
      (comments) => {
        this.comments = comments;
      },
      (error) => {
        console.error('Errore durante il recupero dei commenti:', error);
      }
    );
  }*/

  logout(){
    this.authSvc.logout()
  }

}
