import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { HomepageService } from './services/homepage.service';
import { NgIf } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { HomepageModule } from './pages/homepage/homepage.module';
import { ResultpageModule } from './pages/homepage/resultpage/resultpage.module';
import { GuardGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgIf,
    HttpClientModule,
    RouterModule,
    HomepageModule,
    ResultpageModule
  ],
  providers: [
    HomepageService,
    GuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
