import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  imports: [MenubarModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
    menuItems = [
        { label: 'Home', routerLink: '/' },
        { label: 'Drivers', routerLink: '/drivers' },
        { label: 'Constructors', routerLink: '/constructors' },
        { label: 'Circuits', routerLink: '/circuits' },
    ];
}
