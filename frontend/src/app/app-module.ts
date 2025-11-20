import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Pizza } from './pizza/pizza';
import { Burger } from './burger/burger';
import { Hotdog } from './hotdog/hotdog';
import { Pasta } from './pasta/pasta';
import { Extras } from './extras/extras';
import { Cartfooditems } from './cartfooditems/cartfooditems';
import { Cartextras } from './cartextras/cartextras';
import { Navbar } from './components/navbar/navbar';
import { Menu } from './components/menu/menu';
import { MenuItem } from './components/menu-item/menu-item';
import { Cart } from './components/cart/cart';

@NgModule({
  declarations: [
    App,
    Pizza,
    Burger,
    Hotdog,
    Pasta,
    Extras,
    Cartfooditems,
    Cartextras,
    Navbar,
    Menu,
    MenuItem,
    Cart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
