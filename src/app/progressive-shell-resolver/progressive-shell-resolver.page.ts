import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SampleShellListingModel } from './sample-shell.model';

@Component({
  selector: 'app-progressive-shell-resolver',
  templateUrl: './progressive-shell-resolver.page.html',
  styleUrls: [
    './progressive-shell-resolver.page.scss',
    './shell-elements.scss'
  ]
})
export class ProgressiveShellResolverPage implements OnInit {
  // We will assign data coming from the Route Resolver to this property
  routeResolveData: SampleShellListingModel;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('Progressive Shell Resovlers - ngOnInit()');

    if (this.route && this.route.data) {
      // We resolved a promise for the data Observable
      const promiseObservable = this.route.data;
      console.log('Progressive Shell Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);

      if (promiseObservable) {
        promiseObservable.subscribe(promiseValue => {
          const dataObservable = promiseValue['data'];
          console.log('Progressive Shell Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);

          if (dataObservable) {
            dataObservable.subscribe(observableValue => {
              const pageData: SampleShellListingModel = observableValue;
              // tslint:disable-next-line:max-line-length
              console.log('Progressive Shell Resovlers - Subscribe to dataObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
              // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
              // and the real remote data once it gets fetched
              if (pageData) {
                this.routeResolveData = pageData;
              }
            });
          } else {
            console.warn('No dataObservable coming from Route Resolver promiseObservable');
          }
        });
      } else {
        console.warn('No promiseObservable coming from Route Resolver data');
      }
    } else {
      console.warn('No data coming from Route Resolver');
    }
  }
}
