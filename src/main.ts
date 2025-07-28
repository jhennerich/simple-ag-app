import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Home } from './app/home';
//import { App } from './app/app';

bootstrapApplication(Home, appConfig)
  .catch((err) => console.error(err));