import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from "rxjs";
import { isStringArray } from "../../helpers/isStringArray";
import { EpisodeService } from "../../services/api/episode.service";
import { Episode } from "../../interface/episodes";
import { isCharacterArray } from "../../helpers/isCharacterArray";

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CommonModule],
  providers: [EpisodeService],
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  randomEpisode$: Observable<Episode> = this.episodeSVC.getRandomEpisode();
  protected readonly isStringArray = isStringArray;
  constructor(private episodeSVC: EpisodeService) {}

  protected readonly isCharacterArray = isCharacterArray;
}
