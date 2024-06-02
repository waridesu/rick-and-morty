import { Route } from "@angular/router";

export const EPISODE_ROUTE: Route =
  {
    path: 'episodes',
    loadComponent: () =>
      import('./episode.component').then(
        (m) => m.EpisodeComponent
      ),
  }
