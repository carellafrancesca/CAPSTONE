import { CommentBoxComponent } from './../comment-box/comment-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleconcertComponent } from './singleconcert.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SingleconcertComponent,
    CommentBoxComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPopoverModule,
    NgbModule
  ]
})
export class SingleconcertModule { }
