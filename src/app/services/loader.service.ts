import { Injectable, OnDestroy, signal } from '@angular/core';
import { filter, Subject, takeUntil } from "rxjs";
import { NavigationStart, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements OnDestroy {
  private _isLoading = signal(false);
  private destroyed$ = new Subject();

  constructor(private router: Router) {
    this.router.events
      .pipe(takeUntil(this.destroyed$),
        filter(event => event instanceof NavigationStart)
      ).subscribe(() => {
      this.isLoading = true;
    });
  }

  set isLoading(value: boolean) {
    this._isLoading.set(value);
  }

  get isLoading$() {
    return this._isLoading;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
