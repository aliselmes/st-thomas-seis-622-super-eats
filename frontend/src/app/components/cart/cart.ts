import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  public cartItems: CartItem[] = [];
  public total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
      this.loadCart();
  }

  //load in the current cart
  loadCart(): void {
    this.cartService.getCart().subscribe({
      next: (items) => {
        this.cartItems = items;
        this.calculateTotal();
        console.log('Cart loaded', items);
      },
      error: (error) => {
        console.log('Failed to load cart', error);
      }
    });
  }

  //calculate total price
  calculateTotal(): void {
    this.total = 0;
    for (let item of this.cartItems) {
      this.total = this.total + (item.price * item.quantity);
    }
  }

  //get the total number of items in the cart
  getCartCount(): number {
    let sum = 0;
    for (let item of this.cartItems) {
      sum += item.quantity;
    }
    return sum;
  }

  //checkout method
  checkout(): void {
    if (this.cartItems.length == 0) {
      alert("Your cart is empty, please add items!");
      return;
    }

    //user can confirm the order
    if (confirm(`Place order for ${this.getCartCount()} items? Total: $${this.total}`)) {
      //clear the cart
      this.cartService.clearCart().subscribe({
        next: () => {
          //set the cartCount to zero
          this.cartService.updateCartCount();
          alert("Order placed successfully!");
          //navigate back to the menu
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log('Error during checkout', error);
          alert("checkout failed! please try again!");
        }
      });
    }
  }
}
