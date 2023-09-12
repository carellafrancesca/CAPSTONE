import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultpageComponent } from './resultpage.component';

const routes: Routes = [{ path: '', component: ResultpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultpageRoutingModule { }
