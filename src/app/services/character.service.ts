import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  getCharacters(params: any) {
    return this.httpClient.get(environment.baseURL + environment.character, {
      params,
    });
  }

  getCharactersById(id: string) {
    return this.httpClient.get(
      environment.baseURL + environment.character + id
    );
  }

  getByUrl(url: string) {
    return this.httpClient.get(url);
  }
}