import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ProductListComponent } from './product-list/product-list.component';



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
  ProductListComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [
 AppComponent
  ]
})
export class AppModule {}
