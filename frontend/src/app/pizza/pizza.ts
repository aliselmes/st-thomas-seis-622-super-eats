import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  standalone: false,
  template: `
    <h2>Pizza</h2>
    <img src="images/pizza.jpeg" alt="Pizza" width="200" height="200">
    <p>Ingredients (select or remove):</p>
    <label><input type="checkbox" name="options" value="1" />Cheese</label>
    <label><input type="checkbox" name="options" value="2" />Red Sauce</label>
    <label><input type="checkbox" name="options" value="3" />Pepperoni</label>
    <label><input type="checkbox" name="options" value="4" />Olives</label>
    <br>
    <label><input type="checkbox" name="options" value="5" />Ham</label>
    <label><input type="checkbox" name="options" value="6" />Pineapples</label>
    <label><input type="checkbox" name="options" value="7" />Peppers</label>
    <label><input type="checkbox" name="options" value="8" />Mushrooms</label>
    <br>
    <button>Add to Cart</button>
  `,
  styles: ``,
})
export class Pizza {

}
