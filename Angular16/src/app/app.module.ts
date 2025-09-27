import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';

@NgModule({
  declarations: [AppComponent,App,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    SearchComponent,
    MainMenuComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,

 ],
  imports: [
    BrowserModule,
    RouterModule ,
    FormsModule // <-- RouterOutlet comes from RouterModule
  ],
  bootstrap: [AppComponent, 
    App

  ],

})
export class AppModule { }
