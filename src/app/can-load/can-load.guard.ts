import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable()
export class CanLoadGuard implements CanLoad {

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    return false;
  }
}
