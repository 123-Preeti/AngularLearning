import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
<<<<<<< HEAD
import { ForgetPasswordComponent } from './app/forget-password/forget-password.component';
import { TestComponent } from './test/test.component';

=======
>>>>>>> e057952ce149e72ed5d3b32bff9ce555699b4b6b


@NgModule({
  declarations: [
<<<<<<< HEAD
    ForgetPasswordComponent,
    AppComponent,
    TestComponent
=======
    AppComponent
  
>>>>>>> e057952ce149e72ed5d3b32bff9ce555699b4b6b
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
<<<<<<< HEAD
  bootstrap: [
 AppComponent
  ]
=======
  bootstrap: [AppComponent]   // bootstrap with AppComponent
>>>>>>> e057952ce149e72ed5d3b32bff9ce555699b4b6b
})
export class AppModule {}
