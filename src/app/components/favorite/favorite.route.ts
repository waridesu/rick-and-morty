import { Route } from "@angular/router";

export const FAVORITES_ROUTE: Route =
  {
    path: 'favorites',
    loadComponent: () =>
      import('./favorite.component').then(
        (m) => m.FavoriteComponent
      ),
  }
