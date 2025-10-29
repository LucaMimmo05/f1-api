import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule, ToggleSwitchModule, RouterLink],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu {
  menuItems = [
    { label: 'Home', routerLink: '/' },
    { label: 'Gran Premi', routerLink: '/gran-premi' },
  ];
}
