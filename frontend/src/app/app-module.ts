import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Navbar } from './components/navbar/navbar';
import { Menu } from './components/menu/menu';
import { MenuItemComponent } from './components/menu-item/menu-item';
import { Cart } from './components/cart/cart';

@NgModule({
  declarations: [
    App,
    Navbar,
    Menu,
    Cart,
    MenuItemComponent
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
