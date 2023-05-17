import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReceivingAssetsIconService } from "../../services/receiving-assets-icon.service";
import { Observable } from "rxjs";
import { SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  providers: [ReceivingAssetsIconService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  githubIcon: Observable<SafeHtml> = this.iconService.getIcon('assets/github.svg', 'red')
  constructor(public iconService: ReceivingAssetsIconService) {}
}
