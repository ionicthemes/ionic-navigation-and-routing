import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LazyLoadedPage } from './lazy-loaded.page';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyLoadedPage]
})
export class LazyLoadedPageModule {}
