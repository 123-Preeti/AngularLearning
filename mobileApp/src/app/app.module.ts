import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Login } from './component/login/login';




@NgModule({
  declarations: [
    AppComponent,
    Login
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet
],
  exports: [],

  providers: [],
  bootstrap: [
AppComponent
  ]
})
export class AppModule { }
