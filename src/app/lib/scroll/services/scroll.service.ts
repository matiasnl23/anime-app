import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  percentScroll(): Observable<number> {
    return fromEvent(document, 'scroll').pipe(
      map((result) => {
        const html = result.target as HTMLDocument;
        const {
          clientHeight,
          scrollHeight,
          scrollTop,
        } = html.scrollingElement as Element;

        const viewPercent = Math.round(
          ((scrollTop + clientHeight) / scrollHeight) * 100
        );

        return viewPercent;
      })
    );
  }
}
