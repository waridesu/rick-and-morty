import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CharacterService } from '../../services/api/character.service';
import { RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { Character } from "../../interface/character";
import { RickPortalComponent } from "../rick-portal/rick-portal.component";
import { PlanetComponent } from "../planet/planet.component";

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, RouterLink, RickPortalComponent, NgOptimizedImage, PlanetComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CharacterService],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  randomCharacter$: Observable<Character | null> = this.characterSvc.getRandomCharacter();

  constructor(private characterSvc: CharacterService, private renderer: Renderer2) {}

  generateCharacter(): void{
    this.randomCharacter$ = this.characterSvc.getRandomCharacter();
  }

  addToFavorite(person: Character, event: Event): void {
    this.renderer.setAttribute(event.target, 'disabled', 'true');

    const stats = JSON.parse(localStorage.getItem('character') || '[]');
    if (!stats.some((item: Character) => item && item.id === person.id)) {
      stats.push(person)
      localStorage.setItem('character', JSON.stringify(stats));
    }
  }
}
