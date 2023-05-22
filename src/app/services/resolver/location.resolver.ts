import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LocationService } from "../api/location.service";
import { Observable } from "rxjs";
import { cartoonLocation } from "../../interface/cartoonLocation";

export const locationResolver: ResolveFn<Observable<cartoonLocation>> =
  () =>
    inject(LocationService).getRandomLocation();
