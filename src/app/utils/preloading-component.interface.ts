import { Injector } from '@angular/core';

export interface IPreloadingComponent {
  injector: Injector;
  ngOnInit?: Function;
}
