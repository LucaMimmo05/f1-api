import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule, ToggleSwitchModule, FormsModule, CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu {
  menuItems = [
    { label: 'Home', routerLink: '/' },
    { label: 'Gran Premi', routerLink: '/gran-premi' },
    { label: 'Piloti', routerLink: '/piloti' },
  ];

  isDarkTheme: boolean = false;

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === 'dark';
  }

  handleTheme() {
    const element = document.querySelector('html');
    if (element) {
      if (this.isDarkTheme) {
        localStorage.setItem('theme', 'dark');
        element.classList.add('dark');
      } else {
        localStorage.setItem('theme', 'light');
        element.classList.remove('dark');
      }
    }
  }
}
