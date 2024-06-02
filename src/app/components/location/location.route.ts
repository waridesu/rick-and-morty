import { Route } from "@angular/router";

export const LOCATIONS_ROUTE: Route =
  {
    path: 'locations',
    loadComponent: () =>
      import('./location.component').then(
        (m) => m.LocationComponent
      ),
  } as Route;
