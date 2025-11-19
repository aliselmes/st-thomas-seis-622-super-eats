import { Component } from '@angular/core';

@Component({
  selector: 'app-hotdog',
  standalone: false,
  template: `
    <h2>Hot Dog</h2>
    <img src="images/hotdog.jpeg" alt="Hot Dog" width="200" height="200">
    <p>Ingredients (Select or remove)</p>
    <label><input type="checkbox" name="options" value="1" />Beef Sausage</label>
    <label><input type="checkbox" name="options" value="2" />Veggie Sausage</label>
    <label><input type="checkbox" name="options" value="3" />Onions</label>
    <br>
    <label><input type="checkbox" name="options" value="4" />Mustard</label>
    <label><input type="checkbox" name="options" value="5" />Ketchup</label>
    <label><input type="checkbox" name="options" value="6" />Chili</label>
    <br>
    <button>Add to Cart</button>
  `,
  styles: ``,
})
export class Hotdog {

}
