import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

export class DecorativePreloadingStrategy implements PreloadingStrategy {
  // Keep track of all the preloadable routes and their corresponding load() function
  routes: { [name: string]: { route: Route; load: Function } } = {};

  // This function will get called for every preloadable route (route that has the loadChildren property)
  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data.name) {
      this.routes[route.data.name] = {
        route,
        load
      };
    }
    return of(null);
  }

  // We will call this function manually later
  preLoadRoute(name: string) {
    const route = this.routes[name];
    if (route) {
      route.load();
    }
  }
}
