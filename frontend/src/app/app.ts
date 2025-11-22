import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    // Test: Add a dummy item to cart
    // const testItem = {
    //   id: Date.now(),
    //   menuItemId: 1,
    //   name: 'Test Pizza',
    //   selectedIngredients: ['Cheese', 'Sauce'],
    //   price: 12.99,
    //   quantity: 2
    // };
    
    // this.cartService.addToCart(testItem).subscribe(() => {
    //   this.cartService.updateCartCount();
    //   console.log('Test item added, cart count:', this.cartService.cartCount);
    // });
  }
}
