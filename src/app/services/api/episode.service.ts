import { Injectable } from '@angular/core';
import { environment } from "../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { randomNumber } from "../../helpers/randomNumber";
import { Observable, of, switchMap } from "rxjs";
import { isStringArray } from "../../helpers/isStringArray";
import { getResidents } from "../../helpers/getResidents";
import { Episode } from "../../interface/episodes";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {}

  getRandomEpisode(): Observable<Episode> {
    return this.httpClient.get<Episode>(
      environment.baseURL + environment.episode + randomNumber(51)
    ).pipe(
      switchMap((location) =>
        isStringArray(location.characters) ? getResidents(location, this.httpClient) as Observable<Episode> : of(location))
    );
  }
}
