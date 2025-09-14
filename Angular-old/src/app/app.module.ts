import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ForgetPasswordComponent } from './app/forget-password/forget-password.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    ForgetPasswordComponent,
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
 AppComponent
  ]
})
export class AppModule {}
