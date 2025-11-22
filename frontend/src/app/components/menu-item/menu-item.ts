import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-menu-item',
  standalone: false,
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css',
})
export class MenuItemComponent {
    @Input() item!: MenuItem;

    //variable to hold the user-selected ingredients
    public selectedIngredients: string[] = [];

    constructor(private cartService: CartService) {}

    //start the ingredients list with the default ingredients
    ngOnInit(): void {
      this.selectedIngredients = [...this.item.defaultIngredients]
    }

    //add item to cart
    addToCart(): void {
    const cartItem = {
      id: Date.now(), // Generate a unique id using the current date time
      menuItemId: this.item.id,
      name: this.item.name,
      selectedIngredients: [...this.selectedIngredients],
      price: this.item.price,
      quantity: 1
    };

    this.cartService.addToCart(cartItem).subscribe({
      next: () => {
        // update the cart count after  the ingredient
        this.cartService.updateCartCount();
        //notify the user
        alert(`${this.item.name} added to cart!`);
        
        // Reset the default ingredients after adding the item
        this.selectedIngredients = [...this.item.defaultIngredients];
      },
      error: (error) => {
        console.error('Error adding to cart:', error);
        //notify the user of the error
        alert('Failed to add item to cart. Please try again.');
      }
    });
  }

  //method top bind the input 'checked' attriubute so display checkmarks on default ingredients
  isIngredientSelected(ingredient: string): boolean {
    return this.selectedIngredients.includes(ingredient);
  }

  //on change event method to detect user ingredient selections
  onIngredientChange(ingredient: string, event: any): void {
    const checked = event.target.checked;

    if (checked) {
      //add the ingredient if it's not already in the list
      if (!this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients.push(ingredient);
      }
    } else {
      //if unchecked then remove the ingredient if it is in the list
      const index = this.selectedIngredients.indexOf(ingredient);
      if (index > -1) {
        this.selectedIngredients.splice(index, 1);
      }
    }
    //log the current selected ingredients for testing
    console.log('ingredients:', this.selectedIngredients);
  }
}
