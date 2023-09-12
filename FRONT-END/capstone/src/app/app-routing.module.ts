import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'homepage', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'loginpage', loadChildren: () => import('./pages/loginpage/loginpage.module').then(m => m.LoginpageModule) },
  { path: 'registerpage', loadChildren: () => import('./pages/registerpage/registerpage.module').then(m => m.RegisterpageModule) },
  { path: 'resultpage', loadChildren: () => import('./pages/homepage/resultpage/resultpage.module').then(m => m.ResultpageModule) },
  { path: 'singleconcert', loadChildren: () => import('./pages/homepage/singleconcert/singleconcert.module').then(m => m.SingleconcertModule) },
  { path: 'addpost', loadChildren: () => import('./pages/homepage/addpost/addpost.module').then(m => m.AddpostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
