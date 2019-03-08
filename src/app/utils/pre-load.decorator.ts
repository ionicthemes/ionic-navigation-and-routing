import { DecorativePreloadingStrategy } from './decorative-preloading-strategy';
import { IPreloadingComponent } from './preloading-component.interface';

export function PreLoad(page: string): ClassDecorator {
  // Decorator Factory
  return function(target: Function) {
    // Get a reference to the original target ngOnInit function
    const targetNgOnInit: Function = target.prototype.ngOnInit;

    // Override target ngOnInit function
    // Note: Do not use arrow function to redefine the target ngOnInit (see: https://stackoverflow.com/a/52986447/1116959)
    target.prototype.ngOnInit = function (...args) {
      // 'this' refers to the original Component scope
      const targetComponent: IPreloadingComponent = this;

      // Get a reference to the injector in the target Component
      const targetInjector = targetComponent.injector;
      if (targetInjector) {
        // Inject the custom preloading strategy (which is essentially a service)
        const loader = targetInjector.get(DecorativePreloadingStrategy);

        loader.preLoadRoute(page);
      }

      // Check if we have an ngOnInit function defined in the original target, and 'merge' it with this re-implementation
      if (targetNgOnInit) {
        targetNgOnInit.apply(this, args);
      }
    };
  };
}
