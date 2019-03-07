import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export class FlagPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute: Function = (delay) => {
      // Check if we want to load it right away or with a delay
      if (delay) {
        // emit 0 after 5 seconds then complete
        return timer(5000)
        .pipe(
          // Merge the 0 emmited by the timer and emmit the load() function
          mergeMap(_ => load())
        );
      } else {
        return load();
      }
    };

    return route.data && route.data.preload ? loadRoute(route.data.delay) : of(null);

    // If you opt-out of the delay functionality then return this instead
    // return route.data && route.data.preload ? load() : of(null);
  }
}
