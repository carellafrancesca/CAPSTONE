import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterpageRoutingModule } from './registerpage-routing.module';
import { RegisterpageComponent } from './registerpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterpageComponent
  ],
  imports: [
    CommonModule,
    RegisterpageRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class RegisterpageModule { }
