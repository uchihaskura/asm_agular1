import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
import { ClientRoutingModule } from './app/client/client-routing-module';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
