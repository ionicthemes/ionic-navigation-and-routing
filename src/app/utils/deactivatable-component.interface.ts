import { Observable } from 'rxjs';

export interface IDeactivatableComponent {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
