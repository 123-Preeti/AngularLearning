import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Avi3Component } from './avi-3/avi-3.component';
import { AviTwoComponent } from './avi-two/avi-two.component';
import { AviOneComponent } from './avi-one/avi-one.component';
import { HomeComponent } from './home/home.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './AnyName/login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'thirdpage', component: Avi3Component },
  { path: 'secondpage', component: AviTwoComponent },
  { path: 'firstpage', component: AviOneComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: AviOneComponent },
  {path: 'home/:id', component: AviOneComponent},
  { path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent},
  { path: '**', component: NotfoundComponent },
  // {path: '**', redirectTo: '/avi2' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
