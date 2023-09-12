import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultpageRoutingModule } from './resultpage-routing.module';
import { ResultpageComponent } from './resultpage.component';


@NgModule({
  declarations: [
    ResultpageComponent
  ],
  imports: [
    CommonModule,
    ResultpageRoutingModule
  ]
})
export class ResultpageModule { }
