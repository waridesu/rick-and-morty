import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { locationResolver } from './services/resolver/location.resolver';
import { HttpClientModule } from '@angular/common/http';
import { characterResolver } from './services/resolver/character.resolver';
import { episodeResolver } from './services/resolver/episode.resolver';

const routes: Routes = [
  {
    path: 'characters',
    loadComponent: () =>
      import('./components/character/character.component').then(
        (m) => m.CharacterComponent
      ),
    resolve: { character: characterResolver },
  },

  {
    path: 'character-detail/:id',
    loadComponent: () =>
      import(
        './components/character/character-detail/character-detail.component'
      ).then((m) => m.CharacterDetailComponent),
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./components/location/location.component').then(
        (m) => m.LocationComponent
      ),
    resolve: { location: locationResolver },
  },
  {
    path: 'episodes',
    loadComponent: () =>
      import('./components/episode/episode.component').then(
        (m) => m.EpisodeComponent
      ),
    resolve: { episode: episodeResolver },
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
    path: 'statistics',
    loadComponent: () =>
      import('./components/statistics/statistics.component').then(
        (m) => m.StatisticsComponent
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
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
