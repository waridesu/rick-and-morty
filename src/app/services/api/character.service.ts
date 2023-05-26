import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { randomNumber } from "../../helpers/randomNumber";
import { delay, finalize, map, Observable, share, tap } from "rxjs";
import { Character } from "../../interface/character";
import { LoaderService } from "../loader.service";

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private httpClient: HttpClient, private loaderSvc: LoaderService) {
  }

  getRandomCharacter(): Observable<Character | null> {
    this.loaderSvc.isLoading = true;
    return this.httpClient.get<Character>(
      environment.baseURL + environment.character + randomNumber(826)
    ).pipe(
      map((data) => this.loaderSvc.isLoading ? null : data),
      delay(1000),
      tap((data) => {
        if (data) {
          const stats = JSON.parse(sessionStorage.getItem('character') || '[]');
          stats.push(data)
          sessionStorage.setItem('character', JSON.stringify(stats));
        }
      }),
      share(),
      finalize(() => {
        this.loaderSvc.isLoading = false;
      }));
  }
}
