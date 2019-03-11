import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { defer, Observable } from 'rxjs';
import { finalize, tap, delay } from 'rxjs/operators';

@Injectable()
export class BlockingResolver implements Resolve<any> {
  private loadingElement: any;

  constructor(
    private loadingController: LoadingController,
    private http: HttpClient
  ) { }

  async presentLoader() {
    this.loadingElement = await this.loadingController.create({
      message: 'Loading ...'
    });

    await this.loadingElement.present();
  }

  async dismissLoader() {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();
    }
  }

  // This should be in a separate service
  private getData(): Observable<any> {
    const dataObservable = this.http.get<any>('./assets/sample-data/page-data.json').pipe(
      tap(val => {
        console.log('getData STARTED');
      }),
      delay(5000),
      finalize(() => {
        console.log('getData COMPLETED');
      })
    );

    return dataObservable;
  }

  resolve() {
    // WITHOUT LOADING INDICATOR

    // Base Observable (where we get data from)
    // const dataObservable = this.getData();

    // Basic Resolver that returns the base Observable
    // return dataObservable;


    // WITH LOADING INDICATOR

    // Base Observable (where we get data from)
    const dataObservable = this.getData().pipe(
      finalize(() => {
        console.log('dataObservable COMPLETED - HIDE LOADER');
        this.dismissLoader();
      })
    );

    const deferedObservable = defer(() => {
      // Will be logged at the moment of subscription
      console.log('dataObservable STARTED - SHOW LOADER');
      this.presentLoader();
      return dataObservable;
    });

    // Basic Resolver that returns the base Observable
    return deferedObservable;
  }
}
