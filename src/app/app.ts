import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
   <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <h1> In App </h1>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class App {}
