import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, filter, Subject, takeUntil } from "rxjs";
import { NavigationStart, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements OnDestroy {
  private _isLoading = new BehaviorSubject<boolean>(false);
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
    this._isLoading.next(value);
  }

  get isLoading$() {
    return this._isLoading.asObservable().pipe(takeUntil(this.destroyed$), distinctUntilChanged());
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
