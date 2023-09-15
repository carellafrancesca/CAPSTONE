import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singleconcert',
  templateUrl: './singleconcert.component.html',
  styleUrls: ['./singleconcert.component.scss']
})
export class SingleconcertComponent implements OnInit{

  username: string = '';

  constructor(
    private authSvc: AuthService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.username = this.userSvc.getUsername();
  }

  logout(){
    this.authSvc.logout()
  }


}
