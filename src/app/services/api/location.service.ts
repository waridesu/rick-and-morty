import { Injectable } from '@angular/core';
import { environment } from "../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, of, switchMap } from "rxjs";
import { cartoonLocation } from "../../interface/cartoonLocation";
import { isStringArray } from "../../helpers/isStringArray";
import { randomNumber } from "../../helpers/randomNumber";
import { getResidents } from "../../helpers/getResidents";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) {
  }

  getRandomLocation(): Observable<cartoonLocation> {
    return this.httpClient.get<cartoonLocation>(
      environment.baseURL + environment.location + randomNumber(126)
    ).pipe(
      switchMap((location) =>
        isStringArray(location.residents) ? getResidents(location, this.httpClient) as Observable<cartoonLocation> : of(location))
    );
  }
}
