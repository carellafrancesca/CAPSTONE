import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ConcertService } from 'src/app/services/concert.service';
import { HomepageService } from 'src/app/services/homepage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  username: string = '';
  searchLocation: string = '';

  constructor(
    private authSvc:AuthService,
    private homeSvc: HomepageService,
    private router: Router,
    private userSvc: UserService,
    private concertSvc: ConcertService)
  {}

  ngOnInit(): void {
    this.username = this.userSvc.getUsername();
  }

  search() {
    if (this.searchLocation.trim() !== '') {
      this.router.navigate(['/resultpage', this.searchLocation]);
    }
  }

  yourPost(){
    this.router.navigate(['/authorComment']);
  }

  logout(){
    this.authSvc.logout()
  }

}
