import { Observable, BehaviorSubject, forkJoin, of } from 'rxjs';
import { first, delay } from 'rxjs/operators';

export class ShellProvider<T> {
  private _observable: Observable<T>;

  // A Subject that requires an initial value and emits its current value to new subscribers
  // If we choose a BehaviorSubject, new subscribers will only get the latest value (real data).
  // This is useful for repeated use of the resolved data (navigate to a page, go back, navigate to the same page again)
  private _subject: BehaviorSubject<T>;

  // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
  // However, in production you should set this delay to 0 in the environment.ts file.
  private networkDelay = 2000;
  // To debug shell styles, change configuration in the environment.ts file
  private debugMode = false;

  constructor(shellModel: T, dataObservable: Observable<T>) {
    // tslint:disable-next-line:max-line-length
    const shellClassName = (shellModel && shellModel.constructor && shellModel.constructor.name) ? shellModel.constructor.name : 'No Class Name';

    // tslint:disable-next-line:no-console
    console.time('[' + shellClassName + '] ShellProvider roundtrip');
    // Set the shell model as the initial value
    this._subject = new BehaviorSubject<T>(shellModel);

    const delayObservable = of(true).pipe(
      delay(this.networkDelay)
      // finalize(() => console.log('delayObservable COMPLETED'))
    );

    dataObservable.pipe(
      first() // Prevent the need to unsubscribe because .first() completes the observable
      // finalize(() => console.log('dataObservable COMPLETED'))
    );

    // Put both delay and data Observables in a forkJoin so they execute in parallel so that
    // the delay caused (on purpose) by the delayObservable doesn't get added to the time the dataObservable takes to complete
    const forkedObservables = forkJoin(
      delayObservable,
      dataObservable
    )
    .pipe(
      // finalize(() => console.log('forkedObservables COMPLETED'))
    )
    .subscribe(([delayValue, dataValue]: [boolean, T]) => {
      if (!this.debugMode) {
        this._subject.next(dataValue);
        // tslint:disable-next-line:no-console
        console.timeEnd('[' + shellClassName + '] ShellProvider roundtrip');
      }
    });

    this._observable = this._subject.asObservable();
  }

  public get observable(): Observable<T> {
    return this._observable;
  }
}
