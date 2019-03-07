import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PreloadAllModules } from '@angular/router';
import { FlagPreloadingStrategy } from './utils/flag-preloading-strategy';

import { EagerlyLoadedPageModule } from './eagerly-loaded/eagerly-loaded.module';
import { EagerlyLoadedPage } from './eagerly-loaded/eagerly-loaded.page';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: FlagPreloadingStrategy
    }),
    EagerlyLoadedPageModule
  ],
  exports: [RouterModule],
  providers: [FlagPreloadingStrategy]
})
export class AppRoutingModule {}
