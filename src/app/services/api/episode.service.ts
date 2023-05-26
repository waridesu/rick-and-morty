import { Injectable } from '@angular/core';
import { environment } from "../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { randomNumber } from "../../helpers/randomNumber";
import { delay, finalize, map, Observable, of, switchMap, tap } from "rxjs";
import { isStringArray } from "../../helpers/isStringArray";
import { getResidents } from "../../helpers/getResidents";
import { Episode } from "../../interface/episodes";
import { LoaderService } from "../loader.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient, private loaderSvc: LoaderService) {}

  getRandomEpisode(): Observable<Episode | null> {
    this.loaderSvc.isLoading = true;
    return this.httpClient.get<Episode>(
      environment.baseURL + environment.episode + randomNumber(51)
    ).pipe(
      map((data) => this.loaderSvc.isLoading ? null: data),
      delay(1000),
      switchMap((location) =>
        location && isStringArray(location.characters) ? getResidents(location, this.httpClient) as Observable<Episode> : of(location)),
      tap((data) => {
        if (data) {
          const stats = JSON.parse(sessionStorage.getItem('episode') || '[]');
          stats.push(data)
          sessionStorage.setItem('episode', JSON.stringify(stats));
        }
      }),
      finalize(()=> {
        this.loaderSvc.isLoading = false;
      })
    );
  }
}
