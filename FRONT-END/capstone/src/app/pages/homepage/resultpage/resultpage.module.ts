import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleconcertModule } from '../singleconcert/singleconcert.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SingleconcertModule,
    RouterModule
  ]
})
export class ResultpageModule { }
