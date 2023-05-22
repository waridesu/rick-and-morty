import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { CharacterService } from "../api/character.service";
import { Observable } from "rxjs";
import { Character } from "../../interface/character";

export const characterResolver: ResolveFn<Observable<Character>> =
  () => inject(CharacterService).getRandomCharacter();
