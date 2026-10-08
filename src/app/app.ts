import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { Home } from './pages/home/home';

import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';

@Component({
  imports: [ Header, Footer, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project');
}
