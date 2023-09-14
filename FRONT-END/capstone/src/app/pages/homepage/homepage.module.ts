import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../carousel/carousel.component';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [
    HomepageComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule
  ]
})
export class HomepageModule { }
