import { Component } from '@angular/core';

@Component({
  selector: 'app-cartextras',
  standalone: false,
  template: `
    <p>
      here are the extras...
    </p>
  `,
  styles: ``,
})
export class Cartextras {
  public extrasCounter: number = 1;
}
