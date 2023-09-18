import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IConcertData } from 'src/app/interfaces/iconcert-data';
import { Ilocation } from 'src/app/interfaces/ilocation';
import { ConcertService } from 'src/app/services/concert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.scss']
})
export class ResultpageComponent implements OnInit{

  username: string = '';
  location: string = '';
  concerts: IConcertData[] = [];

  constructor(
    private route: ActivatedRoute,
    private userSvc: UserService,
    private authSvc: AuthService,
    private router: Router,
    private concertSvc: ConcertService,
  ) {}

  ngOnInit() {
    this.username = this.userSvc.getUsername();
    this.route.params.subscribe((params) => {
      this.location = params['location'];
      this.loadConcertsByLocation();
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  singlepage(id: number) {
    this.router.navigate(['/singleconcertpage', id]);
  }

  loadConcertsByLocation() {
    //console.log('Location:', this.location);
    this.concertSvc.getConcertsByLocation(this.location).subscribe((data) => {
      //console.log('Dati dei concerti:', data);
      this.concerts = data;
    });
  }

  logout(){
    this.authSvc.logout()
  }
}
