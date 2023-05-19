import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, share } from "rxjs";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class ReceivingAssetsIconService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getIcon(iconLink: string, fill = ''): Observable<SafeHtml> {
    return this.http.get(iconLink, {responseType: 'text'})
      .pipe(map((data) => {
        if (fill) {
          data = data.replace('<svg', `<svg fill="${fill}"`)
        }
        return this.sanitizer.bypassSecurityTrustHtml(data)
      }),share());
  }
}
