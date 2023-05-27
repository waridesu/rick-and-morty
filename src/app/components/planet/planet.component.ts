import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent {
  private _bgImageUrl: string = '';

  @Input()
  set bgImageUrl(value: string) {
    this._bgImageUrl = `url('${value}') 0/auto 100%`;
  }

  get bgImageUrl(): string {
    return this._bgImageUrl;
  }

  @HostBinding('style.background')
  get hostBackground() {
    return this._bgImageUrl;
  }

}
