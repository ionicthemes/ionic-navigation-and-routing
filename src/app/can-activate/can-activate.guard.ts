import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log('CanActivateGuard [canActivate] called');
    const url = 'redirect-to';
    const tree: UrlTree = this.router.parseUrl(url);

    return tree;
    // return true;
    // return false;
  }
}
