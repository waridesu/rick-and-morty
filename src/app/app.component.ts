import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { RickPortalComponent } from "./components/rick-portal/rick-portal.component";
import { LoaderService } from "./services/loader.service";
import { LayoutModule } from "@angular/cdk/layout";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    RickPortalComponent,
    LayoutModule
  ],
})
export class AppComponent {
  isLoader = this.loaderSvc.isLoading$;

  constructor(private loaderSvc: LoaderService) {}
}

