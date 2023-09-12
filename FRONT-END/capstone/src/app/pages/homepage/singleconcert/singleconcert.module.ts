import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleconcertRoutingModule } from './singleconcert-routing.module';
import { SingleconcertComponent } from './singleconcert.component';


@NgModule({
  declarations: [
    SingleconcertComponent
  ],
  imports: [
    CommonModule,
    SingleconcertRoutingModule
  ]
})
export class SingleconcertModule { }
