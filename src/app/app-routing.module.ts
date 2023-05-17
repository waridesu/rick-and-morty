import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadComponent: () =>
      import('./components/character/character.component').then(
        (m) => m.CharacterComponent
      ),
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./components/location/location.component').then(
        (m) => m.LocationComponent
      ),
  },
  {
    path: 'episodes',
    loadComponent: () =>
      import('./components/episode/episode.component').then(
        (m) => m.EpisodeComponent
      ),
  },
  {
    path: 'teleport',
    loadComponent: () =>
      import('./components/teleport/teleport.component').then(
        (m) => m.TeleportComponent
      ),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./components/favorite/favorite.component').then(
        (m) => m.FavoriteComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  // { path: '', redirectTo: '/characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
