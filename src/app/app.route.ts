import { Routes } from "@angular/router";
import { CHARACTER_ROUTE } from "./components/character/character.route";
import { EPISODE_ROUTE } from "./components/episode/episode.route";
import { FAVORITES_ROUTE } from "./components/favorite/favorite.route";
import { LOCATIONS_ROUTE } from "./components/location/location.route";
import { STATISTICS_ROUTE } from "./components/statistics/statistics.route";

export const APP_ROUTES: Routes = [
  CHARACTER_ROUTE,
  EPISODE_ROUTE,
  FAVORITES_ROUTE,
  LOCATIONS_ROUTE,
  STATISTICS_ROUTE,
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
];
