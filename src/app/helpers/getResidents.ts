import { cartoonLocation } from "../interface/cartoonLocation";
import { HttpClient } from "@angular/common/http";
import { forkJoin, map, Observable } from "rxjs";
import { Character } from "../interface/character";
import { Episode } from "../interface/episodes";

export function getResidents(entity: cartoonLocation | Episode, client: HttpClient): Observable<cartoonLocation | Episode> {
  if(isCartoonLocation(entity)) {
    return getEntityResidents(entity, 'residents', client);
  }
  if (isEpisode(entity)) {
    return getEntityResidents(entity, 'characters', client);
  }
  throw new Error('Unknown entity type');
}

function getEntityResidents<T extends cartoonLocation | Episode>(entity: T, prop: keyof T, client: HttpClient): Observable<cartoonLocation | Episode> {
  const residentRequests = (entity[prop] as string[])
    .map((residentUrl) => client.get<Character>(residentUrl));

  return forkJoin(residentRequests).pipe(map(residents => ({ ...entity, [prop]: residents } as T)));
}

function isCartoonLocation(entity: cartoonLocation | Episode): entity is cartoonLocation {
  return 'residents' in entity;
}

function isEpisode(entity: cartoonLocation | Episode): entity is Episode {
  return 'characters' in entity;
}
