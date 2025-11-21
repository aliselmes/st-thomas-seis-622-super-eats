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
}
