import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PreloadAllModules } from '@angular/router';
// import { FlagPreloadingStrategy } from './utils/flag-preloading-strategy';
import { DecorativePreloadingStrategy } from './utils/decorative-preloading-strategy';

import { EagerlyLoadedPageModule } from './eagerly-loaded/eagerly-loaded.module';
import { EagerlyLoadedPage } from './eagerly-loaded/eagerly-loaded.page';

import { CanLoadGuard } from './can-load/can-load.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'eagerly-loaded',
    component: EagerlyLoadedPage
  },
  {
    path: 'lazy-loaded',
    loadChildren: './lazy-loaded/lazy-loaded.module#LazyLoadedPageModule'
  },
  {
    path: 'pre-loaded',
    loadChildren: './pre-loaded/pre-loaded.module#PreLoadedPageModule',
    data: {
      preload: true,
      delay: false
    }
  },
  {
    path: 'pre-loaded-with-delay',
    loadChildren: './pre-loaded-with-delay/pre-loaded-with-delay.module#PreLoadedWithDelayPageModule',
    data: {
      preload: true,
      delay: true
    }
  },
  {
    path: 'listing',
    loadChildren: './listing/listing.module#ListingPageModule',
    data: {
      name: 'ProductsListing'
    }
  },
  {
    path: 'details',
    loadChildren: './details/details.module#DetailsPageModule',
    data: {
      name: 'ProductDetails'
    }
  },
  {
    path: 'can-activate',
    loadChildren: './can-activate/can-activate.module#CanActivatePageModule'
  },
  {
    path: 'redirect-to',
    loadChildren: './redirect-to/redirect-to.module#RedirectToPageModule'
  },
  {
    path: 'can-deactivate',
    loadChildren: './can-deactivate/can-deactivate.module#CanDeactivatePageModule'
  },
  {
    path: 'can-load',
    loadChildren: './can-load/can-load.module#CanLoadPageModule',
    canLoad: [CanLoadGuard]
  },
  {
    path: 'blocking-resolver',
    loadChildren: './blocking-resolver/blocking-resolver.module#BlockingResolverPageModule'
  },
  {
    path: 'non-blocking-resolver',
    loadChildren: './non-blocking-resolver/non-blocking-resolver.module#NonBlockingResolverPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {
      // preloadingStrategy: PreloadAllModules
      // preloadingStrategy: FlagPreloadingStrategy
      preloadingStrategy: DecorativePreloadingStrategy
    }),
    EagerlyLoadedPageModule
  ],
  exports: [RouterModule],
  providers: [
    // FlagPreloadingStrategy
    DecorativePreloadingStrategy,
    CanLoadGuard
  ]
})
export class AppRoutingModule {}
