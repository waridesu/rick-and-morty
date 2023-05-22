import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase, NgIf } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { finalize } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    HttpClientModule,
    NgIf,
  ],
})
export class AppComponent {
  isNavigating: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(finalize(() => this.isNavigating = false))
      .subscribe(event => {
        if (event instanceof NavigationStart) this.isNavigating = true;
        if (event instanceof NavigationEnd) this.isNavigating = false;
      });
  }
}

