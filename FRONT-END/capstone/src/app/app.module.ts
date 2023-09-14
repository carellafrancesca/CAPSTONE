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
import { HomepageModule } from './pages/homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomepageModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgIf
  ],
  providers: [
    HomepageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
