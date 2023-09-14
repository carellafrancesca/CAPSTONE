import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/interfaces/iuser';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  constructor(private authSvc:AuthService, private homeSvc: HomepageService){}

  ngOnInit(): void {
  }

  logout(){
    this.authSvc.logout()
  }

}
