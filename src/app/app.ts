import { Component } from '@angular/core';
import { Menu } from './menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Menu, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  ngOnInit() {
    // Inizializza il tema solo se non esiste
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    }

    // Applica il tema salvato
    const element = document.querySelector('html');
    if (element && localStorage.getItem('theme') === 'dark') {
      element.classList.add('dark');
    }
  }
}
