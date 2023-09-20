import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      authorName: new FormControl(this.userService.getUsername()),
      commentDate: new FormControl(),
      commentText: new FormControl(),
    });
  }

  onSubmit() {
    const commentData = this.commentForm.value;
    commentData.eventId = this.eventId;
    const token = this.userService.getToken();
    console.log(commentData);

    this.commentService.sendComment(commentData, token).subscribe(
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
