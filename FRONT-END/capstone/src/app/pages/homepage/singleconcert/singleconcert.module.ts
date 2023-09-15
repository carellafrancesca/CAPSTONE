import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleconcertComponent } from './singleconcert.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SingleconcertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ]
})
export class SingleconcertModule { }
