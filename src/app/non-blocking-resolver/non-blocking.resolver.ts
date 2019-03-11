import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, finalize } from 'rxjs/operators';

@Injectable()
export class NonBlockingResolver implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) {}

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
    // Base Observable (where we get data from)
    const dataObservable = this.getData();

    // NON-BLOCKING RESOLVERS

    // Resolver using a ReplySubject that emits the base Observable and then completes
    // const subject = new ReplaySubject();
    // subject.next(dataObservable);
    // subject.complete();
    // return subject;

    // Resolver using an Observable that emits the base Observable and then completes
    // const observable = Observable.create((observer) => {
    //   observer.next(dataObservable);
    //   observer.complete();
    // });
    // return observable;

    // Resolver using a Promise that resolves the base Observable
    const observablePromise = new Promise((resolve, reject) => {
      resolve(dataObservable);
    });
    return observablePromise;
  }
}
