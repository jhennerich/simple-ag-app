import { Routes } from '@angular/router';
import { Home } from './home';
import { User } from './user';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  //  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'App Home Page', component: Home, },
  { path: 'user', title: 'App User Page', component: User, },
  { path: 'login', title: 'App Login Page', component: LoginComponent, },
];
