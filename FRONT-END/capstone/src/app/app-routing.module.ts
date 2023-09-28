import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ResultpageComponent } from './pages/homepage/resultpage/resultpage.component';
import { SingleconcertComponent } from './pages/homepage/singleconcert/singleconcert.component';
import { AuthorCommentComponent } from './pages/author-comment/author-comment.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'resultpage', component: ResultpageComponent},
  { path: 'resultpage/:location', component: ResultpageComponent },
  { path: 'singleconcertpage', component: SingleconcertComponent },
  { path: 'singleconcertpage/:id', component: SingleconcertComponent },
  { path: 'concert/:id', component: SingleconcertComponent },
  { path: 'authorComment', component: AuthorCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
