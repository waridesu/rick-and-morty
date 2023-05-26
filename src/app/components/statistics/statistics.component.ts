import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from "../../services/loader.service";

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  character: number = JSON.parse(sessionStorage.getItem('character') || '[]').length;
  location: number = JSON.parse(sessionStorage.getItem('location') || '[]').length;
  episode: number = JSON.parse(sessionStorage.getItem('episode') || '[]').length;
  constructor(private loaderSvc: LoaderService) {
    this.loaderSvc.isLoading = false;
  }
}
