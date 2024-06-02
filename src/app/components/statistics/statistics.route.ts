import { Route } from "@angular/router";

export const STATISTICS_ROUTE: Route =
  {
    path: 'statistics',
    loadComponent: () =>
      import('./statistics.component').then(
        (m) => m.StatisticsComponent
      ),
  }
