import { Component, Input } from '@angular/core';

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
  @Input()
  public extrasCounter: number = 1;
}
