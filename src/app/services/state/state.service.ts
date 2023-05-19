import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private characterSubject = new BehaviorSubject<any>(null);
  character$ = this.characterSubject.asObservable();

  private locationSubject = new BehaviorSubject<any>(null);
  location$ = this.locationSubject.asObservable();

  private episodeSubject = new BehaviorSubject<any>(null);
  episode$ = this.episodeSubject.asObservable();

  updateCharacter(character: any): void {
    this.characterSubject.next(character);
  }

  updateLocation(location: any): void {
    this.locationSubject.next(location);
  }

  updateEpisode(episode: any): void {
    this.episodeSubject.next(episode);
  }
}
