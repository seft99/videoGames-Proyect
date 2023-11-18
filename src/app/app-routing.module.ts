import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { ConsultVideoGameComponent } from './page/consult-video-game/consult-video-game.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'mainPage',
    component:MainPageComponent,
  },
  {
    path:'consultVideoGame/:id',
    component:ConsultVideoGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
