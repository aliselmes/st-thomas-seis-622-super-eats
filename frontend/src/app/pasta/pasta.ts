import { Component } from '@angular/core';

@Component({
  selector: 'app-pasta',
  standalone: false,
  template: `
    <h2>Pasta</h2>
    <img src="images/pasta.jpeg" alt="Pasta" width="200" height="200">
    <p>Ingredients (Select or remove)</p>
    <label><input type="checkbox" name="options" value="1" />Spaghetti</label>
    <label><input type="checkbox" name="options" value="2" />Penne</label>
    <label><input type="checkbox" name="options" value="3" />Meatballs</label>
    <label><input type="checkbox" name="options" value="4" />Tomato Sauce</label>
    <br>
    <label><input type="checkbox" name="options" value="5" />Pesto</label>
    <label><input type="checkbox" name="options" value="6" />Parmesan</label>
    <label><input type="checkbox" name="options" value="7" />Chicken</label>
    <label><input type="checkbox" name="options" value="8" />Olives</label>
    <br>
    <button>Add to Cart</button>
  `,
  styles: ``,
})
export class Pasta {

}
