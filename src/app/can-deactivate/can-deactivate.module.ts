import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CanDeactivatePage } from './can-deactivate.page';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: CanDeactivatePage,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CanDeactivatePage],
  providers: [CanDeactivateGuard]
})
export class CanDeactivatePageModule {}
