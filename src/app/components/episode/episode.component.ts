import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Observable, Subscription } from "rxjs";
import { EpisodeService } from "../../services/api/episode.service";
import { Episode } from "../../interface/episodes";
import { isCharacterArray } from "../../helpers/isCharacterArray";
import { Character } from "../../interface/character";
import { PlanetComponent } from "../planet/planet.component";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, PlanetComponent],
  providers: [EpisodeService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnDestroy {
  randomEpisode$: Observable<Episode | null> = this.episodeSVC.getRandomEpisode()
  protected readonly isCharacterArray = isCharacterArray;
  displayLimit = 0;
  screenLimit= 0;
  private subscription: Subscription | undefined

  constructor(private episodeSVC: EpisodeService,
              private renderer: Renderer2,
              private breakpointObserver: BreakpointObserver,
              private cdRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.subscription = this.breakpointObserver
      .observe(['(max-width: 768px)', '(min-width: 768px)', '(min-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints['(min-width: 768px)']) {
            this.updateLimit(4);
            this.screenLimit = 4;
          }
          if (state.breakpoints['(min-width: 1200px)']) {
            this.updateLimit(5);
            this.screenLimit = 5;
          }
          if (state.breakpoints['(max-width: 768px)']) {
            this.updateLimit(2);
            this.screenLimit = 2;
          }
        }
      });
  }
  trackByFunction(index: number, item: Character): number {
    return item.id;
  }

  generateEpisode() {
    this.randomEpisode$ = this.episodeSVC.getRandomEpisode()
    console.log('gen');
    this.displayLimit = this.screenLimit;
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
    this.updateLimit(characters.length);
  }

  updateLimit(length: number) {
    this.displayLimit = length
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
