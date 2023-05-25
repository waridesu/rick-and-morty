import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from "../../services/loader.service";
import { Character } from "../../interface/character";
import { Episode } from "../../interface/episodes";
import { cartoonLocation } from "../../interface/cartoonLocation";

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  characters: Character[] = JSON.parse(localStorage.getItem('character') || '[]');
  locations: cartoonLocation[] = JSON.parse(localStorage.getItem('location') || '[]');
  episodes: Episode[] = JSON.parse(localStorage.getItem('episode') || '[]');
  constructor(private loaderSvc: LoaderService) {
    this.loaderSvc.isLoading = false;
  }

  removeEpisode(episode: Episode) {
    this.episodes = this.episodes.filter(e => e.id !== episode.id);
    localStorage.setItem('episode', JSON.stringify(this.episodes));
  }

  removeCharacter(character: Character) {
    this.characters = this.characters.filter(e => e.id !== character.id);
    localStorage.setItem('character', JSON.stringify(this.characters));
  }
}
