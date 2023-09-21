import { ConcertService } from './../../../services/concert.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Icomment } from 'src/app/interfaces/icomment';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit{

  @Input() eventId: number | undefined;
  commentForm!: FormGroup;
  username: string = '';
  comments: any[] = [];

  constructor(
    private commentService: CommentService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      usernameAuthor: new FormControl(),
      commentDate: new FormControl(),
      commentText: new FormControl(),
    });
    this.route.params.subscribe((params) => {
      const eventId = +params['id'];
      if (!isNaN(eventId)) {
        this.eventId = eventId;
      }
    });
  }

  onSubmit() {
    const token = this.userService.getToken();
    const com : Icomment = {};
    com.commentDate = this.commentForm.value.commentDate;
    com.commentText = this.commentForm.value.commentText;
    com.usernameAuthor = this.commentForm.value.usernameAuthor;
    //console.log(com);

    this.commentService.sendComment(com, token, this.eventId!).subscribe(
      (response) => {
        console.log('Commento inviato con successo:', response);
        this.loadComments();
      },
      (error) => {
        console.error("Errore durante l'invio del commento:", error.error.message);
      }
    );
  }

  loadComments() {
    if (this.eventId) {
      this.commentService.getCommentsByEventId(this.eventId).subscribe(
        (comments) => {
          this.comments = comments;
        },
        (error) => {
          console.error('Errore durante il recupero dei commenti:', error);
        }
      );
    }
  }

}
