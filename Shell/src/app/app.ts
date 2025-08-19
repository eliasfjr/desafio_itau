import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutHeader } from './components/molecules/layout-header/layout-header';
import { Sidebar } from './components/molecules/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutHeader, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Shell');
}
