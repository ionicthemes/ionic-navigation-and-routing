import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // Loading modules
  {
    path: 'eagerly-loaded',
    component: EagerlyLoadedPage
  },
  {
    path: 'lazy-loaded',
    loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedPageModule)
  },
  {
    path: 'pre-loaded',
    loadChildren: () => import('./pre-loaded/pre-loaded.module').then(m => m.PreLoadedPageModule),
    data: {
      preload: true,
      delay: false
    }
  },
  {
    path: 'pre-loaded-with-delay',
    loadChildren: () => import('./pre-loaded-with-delay/pre-loaded-with-delay.module').then(m => m.PreLoadedWithDelayPageModule),
    data: {
      preload: true,
      delay: true
    }
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingPageModule),
    data: {
      name: 'ProductsListing'
    }
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule),
    data: {
      name: 'ProductDetails'
    }
  },
  // Guards
  {
    path: 'can-activate',
    loadChildren: () => import('./can-activate/can-activate.module').then(m => m.CanActivatePageModule)
  },
  {
    path: 'redirect-to',
    loadChildren: () => import('./redirect-to/redirect-to.module').then(m => m.RedirectToPageModule)
  },
  {
    path: 'can-deactivate',
    loadChildren: () => import('./can-deactivate/can-deactivate.module').then(m => m.CanDeactivatePageModule)
  },
  {
    path: 'can-load',
    loadChildren: () => import('./can-load/can-load.module').then(m => m.CanLoadPageModule),
    canLoad: [CanLoadGuard]
  },
  // Resolvers
  {
    path: 'blocking-resolver',
    loadChildren: () => import('./blocking-resolver/blocking-resolver.module').then(m => m.BlockingResolverPageModule)
  },
  {
    path: 'non-blocking-resolver',
    loadChildren: () => import('./non-blocking-resolver/non-blocking-resolver.module').then(m => m.NonBlockingResolverPageModule)
  },
  {
    path: 'progressive-shell-resolver',
    loadChildren: () => import('./progressive-shell-resolver/progressive-shell-resolver.module').then(m => m.ProgressiveShellResolverPageModule)
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
