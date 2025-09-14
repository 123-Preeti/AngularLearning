import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { LoginComponent } from './newfolder/login/login.component';
import { ShowComponent } from './newfolder/show/show.component';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [App,
    LoginComponent, 
    ShowComponent, 
    AppComponent],
  imports: [
    BrowserModule,
    RouterModule  // <-- RouterOutlet comes from RouterModule
  ],
  bootstrap: [App, 
    LoginComponent,
     ShowComponent],

})
export class AppModule { }
