import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Observable } from "rxjs";
import { EpisodeService } from "../../services/api/episode.service";
import { Episode } from "../../interface/episodes";
import { isCharacterArray } from "../../helpers/isCharacterArray";
import { Character } from "../../interface/character";

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [EpisodeService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  randomEpisode$: Observable<Episode | null> = this.episodeSVC.getRandomEpisode()
  protected readonly isCharacterArray = isCharacterArray;
  displayLimit  = 5;

  constructor(private episodeSVC: EpisodeService, private renderer: Renderer2) {}
  trackByFunction(index: number, item: Character): number {
    return item.id;
  }
  generateEpisode() {
    this.randomEpisode$ = this.episodeSVC.getRandomEpisode()
  }

  addToFavorite(episode: Episode, event: Event) {
    this.renderer.setAttribute(event.target, 'disabled', 'true');

    const stats = JSON.parse(localStorage.getItem('episode') || '[]');
    if (!stats.some((item: Character) => item && item.id === episode.id)) {
      stats.push(episode)
      localStorage.setItem('episode', JSON.stringify(stats));
    }
  }

  showMore(characters: Character[]) {
    this.displayLimit = characters.length
  }
}
