import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') form!: NgForm;
  error: undefined | string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    const username = this.form.value.username;
    const password = this.form.value.password;

    if (username && password && username.trim() !== '' && password.trim() !== ''){
        this.authService.signin(this.form.value).subscribe(
          resp => {
            console.log(resp);
            this.error = undefined;
            this.authService.loggedIn = true;
            localStorage.setItem('userLogin', JSON.stringify(resp));
            this.router.navigate(['/users'])
          }, err => {
            console.log(err.error.message);
            this.error = err.error.message;
          })
        this.error = undefined;
    } else {
      this.error = 'Field Required';
    }

}

}
