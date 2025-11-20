import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Cart } from './components/cart/cart';


const routes: Routes = [
  { path: '', component: Menu },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
