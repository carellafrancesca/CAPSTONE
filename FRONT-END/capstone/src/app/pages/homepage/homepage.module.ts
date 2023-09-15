import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../carousel/carousel.component';
import { HomepageComponent } from './homepage.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ResultpageComponent } from './resultpage/resultpage.component';

@NgModule({
  declarations: [
    HomepageComponent,
    CarouselComponent,
    ResultpageComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    FormsModule
  ]
})
export class HomepageModule { }
