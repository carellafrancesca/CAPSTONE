import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpostRoutingModule } from './addpost-routing.module';
import { AddpostComponent } from './addpost.component';


@NgModule({
  declarations: [
    AddpostComponent
  ],
  imports: [
    CommonModule,
    AddpostRoutingModule
  ]
})
export class AddpostModule { }
