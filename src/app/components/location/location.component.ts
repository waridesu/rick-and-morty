import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from "../../services/api/location.service";
import { Observable } from "rxjs";
import { cartoonLocation } from "../../interface/cartoonLocation";
import { FormsModule } from "@angular/forms";
import { isCharacterArray } from "../../helpers/isCharacterArray";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [LocationService],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent {
  randomLocation$: Observable<cartoonLocation> = this.locationSVC.getRandomLocation();
  protected readonly isCharacterArray = isCharacterArray;
  constructor(private locationSVC: LocationService) {}

}
