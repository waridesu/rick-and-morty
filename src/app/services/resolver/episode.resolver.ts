import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { EpisodeService } from "../api/episode.service";
import { Observable } from "rxjs";
import { Episode } from "../../interface/episodes";

export const episodeResolver: ResolveFn<Observable<Episode>> =
  () => inject(EpisodeService).getRandomEpisode();
