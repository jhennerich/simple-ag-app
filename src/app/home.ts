import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
    <div> <H1> Simple-AG App </H1>  </div>

    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class Home implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const filter = this.route.snapshot.queryParamMap.get('username');
    console.log('passed value is:', filter); 
  }
}