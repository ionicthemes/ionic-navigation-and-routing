import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreLoadedWithDelayPage } from './pre-loaded-with-delay.page';

const routes: Routes = [
  {
    path: '',
    component: PreLoadedWithDelayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PreLoadedWithDelayPage]
})
export class PreLoadedWithDelayPageModule {}
