import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { ForgetPasswordComponent } from './app/forget-password/forget-password.component';
import { TestComponent } from './test/test.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { CenterComponent } from './center/center.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { Avi3Component } from './avi-3/avi-3.component';
import { AviOneComponent } from './avi-one/avi-one.component';
import { AviTwoComponent } from './avi-two/avi-two.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { routes } from './app.routes';
import { LoginComponent } from './AnyName/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';




@NgModule({
  declarations: [
    ForgetPasswordComponent,
    AppComponent,
    TestComponent,
    LeftComponent,
    RightComponent,
    CenterComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    Avi3Component,
    AviOneComponent,
    AviTwoComponent,
    HomeComponent,
    FirstpageComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
