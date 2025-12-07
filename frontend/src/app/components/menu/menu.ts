import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
    public menuItems: MenuItem[] = [];

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
      this.loadMenuItems();
    }

    loadMenuItems(): void {
      this.menuService.getMenuItems().subscribe({
        next: (items) => {
          this.menuItems = items;
          console.log('Menu items loaded:', items);
        },
        error: (error) => {
          console.log('Error loading items', error);
        }
      });
    }


}
