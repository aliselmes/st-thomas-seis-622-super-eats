import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api/cart';

  public cartCount: number = 0;

  constructor(private http: HttpClient) {
    this.updateCartCount();
  }

  //Get all items in the cart
  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  //Add an item to the cart
  addToCart(item: CartItem): Observable<CartItem[]> {
    return this.http.post<CartItem[]>(this.apiUrl, item);
  }

  //Update the quantity of one item
  updateQuantity(id: number, quantity: number): Observable<CartItem[]> {
    return this.http.put<CartItem[]>(`${this.apiUrl}/${id}`, { quantity });
  }

  //Delete an item from the cart
  removeItem(id: number): Observable<CartItem[]> {
    return this.http.delete<CartItem[]>(`${this.apiUrl}/${id}`);
  }

  //Clear the whole cart
  clearCart(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  //this update cart count method is here in the service as multiple components need to use it
  updateCartCount(): void {
    this.getCart().subscribe({
      next: (cart) => {
        // Simple for loop
        let count = 0;
        for (let item of cart) {
          count += item.quantity;
        }
        this.cartCount = count;
      },
      error: (error) => {
        console.error('Error updating cart count:', error);
        this.cartCount = 0;
      }
    });
  }

}
