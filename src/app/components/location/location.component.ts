import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LocationService } from '../../services/api/location.service';
import { Observable, Subscription } from 'rxjs';
import { cartoonLocation } from '../../interface/cartoonLocation';
import { FormsModule } from '@angular/forms';
import { isCharacterArray } from '../../helpers/isCharacterArray';
import { Character } from "../../interface/character";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LocationService],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  randomLocation$: Observable<cartoonLocation | null> = this.locationSVC.getRandomLocation()
  protected readonly isCharacterArray = isCharacterArray;
  displayLimit = 0;
  private subscription: Subscription | undefined

  constructor(private locationSVC: LocationService, private renderer: Renderer2, private breakpointObserver: BreakpointObserver, private cdRef: ChangeDetectorRef) {
    this.subscription = this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints['(min-width: 768px)']) {
            this.updateLimit(3);
          }
        } else {
          this.updateLimit(1);
        }
      });
  }

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

  updateLimit(length: number) {
    this.displayLimit = length
    this.cdRef.detectChanges();
  }

  showMore(residents: Character[]) {
    this.displayLimit = residents.length
  }
}
