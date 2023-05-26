import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivingAssetsIconService } from '../../services/api/receiving-assets-icon.service';
import { Observable } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReceivingAssetsIconService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  githubIcon: Observable<SafeHtml> = this.iconService.getIcon(
    '/assets/github.svg',
    'white'
  );
  constructor(public iconService: ReceivingAssetsIconService) {}
}
