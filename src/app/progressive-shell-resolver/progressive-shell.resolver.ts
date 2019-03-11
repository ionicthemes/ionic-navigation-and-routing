import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, delay, finalize } from 'rxjs/operators';

import { SampleShellListingModel } from './sample-shell.model';
import { ShellProvider } from './shell.provider';

@Injectable()
export class ProgressiveShellResolver implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) {}

  // These should be in a separate service
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

  private getDataWithShell(): Observable<SampleShellListingModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: SampleShellListingModel = new SampleShellListingModel(true);
    const dataObservable = this.getData();

    const shellProvider = new ShellProvider(
      shellModel,
      dataObservable
    );

    return shellProvider.observable;
  }

  resolve() {
    // Get the Shell Provider from the service
    const shellProviderObservable = this.getDataWithShell();

    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      resolve(shellProviderObservable);
    });
    return observablePromise;
  }
}
