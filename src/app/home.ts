import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
   <nav>
      <a href="/">Home</a>
      |
      <a href="/login">Login</a>
      |
      <a href="/user">User</a>
    </nav>
<!--    <div hidden  align="center"> <H1> Simple-AG App </H1>  </div>
-->    
    <div> <H1> Simple-AG App {{loginStatus}} </H1>  </div>

    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class Home {
  loginStatus = false;
}