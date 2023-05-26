import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/api/location.service';
import { Observable } from 'rxjs';
import { cartoonLocation } from '../../interface/cartoonLocation';
import { FormsModule } from '@angular/forms';
import { isCharacterArray } from '../../helpers/isCharacterArray';
import { Character } from "../../interface/character";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LocationService],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  randomLocation$: Observable<cartoonLocation | null> = this.locationSVC.getRandomLocation()
  protected readonly isCharacterArray = isCharacterArray;
  displayLimit = 3;

  constructor(private locationSVC: LocationService, private renderer: Renderer2) {}
  trackByFunction(index: number, item: Character): number {
    return item.id;
  }
  generateLocation() {
    this.randomLocation$ = this.locationSVC.getRandomLocation()
  }

  addToFavorite(location: cartoonLocation, event: Event) {
    this.renderer.setAttribute(event.target, 'disabled', 'true');

    const stats = JSON.parse(localStorage.getItem('location') || '[]');
    if (!stats.some((item: cartoonLocation) => item && item.id === location.id)) {
      stats.push(location)
      localStorage.setItem('location', JSON.stringify(stats));
    }
  }

  addToFavoriteResident(character: Character, event: MouseEvent) {
    this.renderer.setAttribute(event.target, 'disabled', 'true');

    const stats = JSON.parse(localStorage.getItem('character') || '[]');
    if (!stats.some((item: Character) => item && item.id === character.id)) {
      stats.push(character)
      localStorage.setItem('character', JSON.stringify(stats));
    }
  }

  showMore(residents: Character[]) {
    this.displayLimit = residents.length
  }
}
