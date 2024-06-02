import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withHashLocation, withPreloading } from "@angular/router";
import { APP_ROUTES } from "./app/app.route";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules), withHashLocation())
  ]
}).catch(err => console.error(err));
