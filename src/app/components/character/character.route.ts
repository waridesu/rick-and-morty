import { Route } from "@angular/router";

export const CHARACTER_ROUTE: Route =
  {
    path: 'characters',
    loadComponent: () =>
      import('./character.component').then(
        (m) => m.CharacterComponent
      ),
  }
