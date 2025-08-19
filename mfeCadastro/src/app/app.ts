import { Component, signal } from '@angular/core';
import { NewUser } from './components/pages/user/new-user';

@Component({
  selector: 'app-root',
  imports: [NewUser],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mfeCadastro');
}
