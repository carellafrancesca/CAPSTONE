import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Icomment } from 'src/app/interfaces/icomment';
import { IConcertData } from 'src/app/interfaces/iconcert-data';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-author-comment',
  templateUrl: './author-comment.component.html',
  styleUrls: ['./author-comment.component.scss']
})
export class AuthorCommentComponent implements OnInit{

  username: string = '';
  comments: Icomment[] = [];
  usernameLoggato: string = '';

  constructor(private commentService: CommentService,
    private authService: AuthService,
    private router: Router,
    private userSvc: UserService
    ) {}

  ngOnInit(): void {
    this.username = this.userSvc.getUsername();
    this.usernameLoggato = this.authService.getUsername();
    this.commentService.getCommentsByUsername(this.usernameLoggato)
      .subscribe(
        (data) => {
          this.comments = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  goToConcert(comment: Icomment) {
    if (comment && comment.concert && comment.concert.id) {
      this.router.navigate(['/singleconcertpage', comment.concert.id]);
    }
  }

  logout(){
    this.authService.logout()
  }

}
