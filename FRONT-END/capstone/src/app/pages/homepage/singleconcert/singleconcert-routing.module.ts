import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleconcertComponent } from './singleconcert.component';

const routes: Routes = [{ path: '', component: SingleconcertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleconcertRoutingModule { }
