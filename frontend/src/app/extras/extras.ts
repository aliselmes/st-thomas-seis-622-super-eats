import { Component } from '@angular/core';

@Component({
  selector: 'app-extras',
  standalone: false,
  template: `
    <h2>Extras</h2>
    <p><img src="images/extras.jpeg" alt="Extras" width="200" height="200"></p>
    <label><input type="checkbox" name="options" value="1" />Coca-Cola</label>
    <label><input type="checkbox" name="options" value="2" />Lemonade</label>
    <label><input type="checkbox" name="options" value="3" />Water</label>
    <br>
    <label><input type="checkbox" name="options" value="4" />Orange Juice</label>
    <label><input type="checkbox" name="options" value="5" />Bag of Chips</label>
    <label><input type="checkbox" name="options" value="6" />Utensils</label>
    <br>
    <button>Add to Cart</button>
  `,
  styles: ``,
})
export class Extras {

}
