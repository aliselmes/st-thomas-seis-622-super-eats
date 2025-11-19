import { Component } from '@angular/core';

@Component({
  selector: 'app-burger',
  standalone: false,
  template: `
    <h2>Burger</h2>
    <img src="images/burger.jpeg" alt="Burger" width="200" height="200">
    <p>Ingredients (Select or remove)</p>
    <label><input type="checkbox" name="options" value="1" />Beef Patty</label>
    <label><input type="checkbox" name="options" value="2" />Veggie Patty</label>
    <label><input type="checkbox" name="options" value="3" />Lettuce</label>
    <label><input type="checkbox" name="options" value="4" />Tomato</label>
    <br>
    <label><input type="checkbox" name="options" value="5" />Pickles</label>
    <label><input type="checkbox" name="options" value="6" />Cheese</label>
    <label><input type="checkbox" name="options" value="7" />Ketchup</label>
    <label><input type="checkbox" name="options" value="8" />Bacon</label>
    <br>
    <button>Add to Cart</button>
  `,
  styles: ``,
})
export class Burger {

}
