import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { ViewVideoGameComponent } from './page/view-video-game/view-video-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './page/toolbar/toolbar.component';
import { MaterialImportsModule } from './shared/material-imports/material-imports.module';
import { ConsultVideoGameComponent } from './page/consult-video-game/consult-video-game.component';
import { RegisterUserComponent } from './page/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    ViewVideoGameComponent,
    ToolbarComponent,
    ConsultVideoGameComponent,
    RegisterUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
