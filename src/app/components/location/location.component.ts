import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/api/location.service';
import { map, Observable } from 'rxjs';
import { cartoonLocation } from '../../interface/cartoonLocation';
import { FormsModule } from '@angular/forms';
import { isCharacterArray } from '../../helpers/isCharacterArray';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [LocationService],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  randomLocation$: Observable<cartoonLocation> = this.route.data.pipe(
    map((data) => data['location'])
  );
  protected readonly isCharacterArray = isCharacterArray;
  constructor(
    private route: ActivatedRoute,
    private locationSVC: LocationService
  ) {}

  generateLocation() {
    this.randomLocation$ = this.locationSVC.getRandomLocation();
  }
}
