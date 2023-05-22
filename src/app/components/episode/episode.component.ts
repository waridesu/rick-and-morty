import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from "rxjs";
import { EpisodeService } from "../../services/api/episode.service";
import { Episode } from "../../interface/episodes";
import { isCharacterArray } from "../../helpers/isCharacterArray";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CommonModule],
  providers: [EpisodeService],
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  randomEpisode$: Observable<Episode> = this.route.data.pipe(map(data => data['episode']))
  protected readonly isCharacterArray = isCharacterArray;

  constructor(private route: ActivatedRoute, private episodeSVC: EpisodeService) {}

  generateEpisode() {
    this.randomEpisode$ = this.episodeSVC.getRandomEpisode();
  }
}
