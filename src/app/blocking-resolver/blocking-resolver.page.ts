import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blocking-resolver',
  templateUrl: './blocking-resolver.page.html',
  styleUrls: ['./blocking-resolver.page.scss'],
})
export class BlockingResolverPage implements OnInit {
  // We will assign data coming from the Route Resolver to this property
  routeResolveData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Blocking Resovlers - ngOnInit()');

    if (this.route && this.route.data) {
      const dataObservable = this.route.data;
      console.log('Blocking Resovlers - Route Resolve Observable => dataObservable: ', dataObservable);

      if (dataObservable) {
        dataObservable.subscribe(observableValue => {
          const pageData: any = observableValue['data'];
          // tslint:disable-next-line:max-line-length
          console.log('Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
          if (pageData) {
            this.routeResolveData = pageData;
          }
        });
      } else {
        console.warn('No dataObservable coming from Route Resolver data');
      }
    } else {
      console.warn('No data coming from Route Resolver');
    }
  }
}
