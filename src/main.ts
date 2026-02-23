import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { MainLayoutComponent } from './app/layout/main-layout/main-layout.component';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './app/core/services/api.service';

bootstrapApplication(MainLayoutComponent, { providers: [ provideRouter(appRoutes), provideHttpClient(), ApiService ] }).catch(err => console.error(err));