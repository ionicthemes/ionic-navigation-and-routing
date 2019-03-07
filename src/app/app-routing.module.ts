import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    }),
    EagerlyLoadedPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
