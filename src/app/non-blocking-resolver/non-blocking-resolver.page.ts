import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-non-blocking-resolver',
  templateUrl: './non-blocking-resolver.page.html',
  styleUrls: ['./non-blocking-resolver.page.scss'],
})
export class NonBlockingResolverPage implements OnInit {
  // We will assign data coming from the Route Resolver to this property
  routeResolveData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('NON Blocking Resovlers - ngOnInit()');

    if (this.route && this.route.data) {
      // We resolved a promise for the data Observable
      const promiseObservable = this.route.data;
      console.log('NON Blocking Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);

      if (promiseObservable) {
        promiseObservable.subscribe(promiseValue => {
          const dataObservable = promiseValue['data'];
          console.log('NON Blocking Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);

          if (dataObservable) {
            dataObservable.subscribe(observableValue => {
              const pageData: any = observableValue;
              // tslint:disable-next-line:max-line-length
              console.log('NON Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
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
