import { Injectable } from '@angular/core';
import { environment } from "../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { delay, finalize, map, Observable, of, switchMap, tap } from "rxjs";
import { cartoonLocation } from "../../interface/cartoonLocation";
import { isStringArray } from "../../helpers/isStringArray";
import { randomNumber } from "../../helpers/randomNumber";
import { getResidents } from "../../helpers/getResidents";
import { LoaderService } from "../loader.service";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient, private loaderSvc: LoaderService) {}

  getRandomLocation(): Observable<cartoonLocation | null> {
    this.loaderSvc.isLoading = true;
    return this.httpClient.get<cartoonLocation>(
      environment.baseURL + environment.location + randomNumber(126)
    ).pipe(
      map((data) => this.loaderSvc.isLoading ? null: data),
      delay(1000),
      switchMap((location) =>
        location && isStringArray(location.residents) ? getResidents(location, this.httpClient) as Observable<cartoonLocation> : of(location)),
      tap((data) => {
        if (data) {
          const stats = JSON.parse(sessionStorage.getItem('location') || '[]');
          stats.push(data)
          sessionStorage.setItem('location', JSON.stringify(stats));
        }
      }),
      finalize(()=> {
        this.loaderSvc.isLoading = false;
      })
    );
  }
}
