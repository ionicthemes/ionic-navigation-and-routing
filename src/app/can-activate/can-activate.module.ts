import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CanActivatePage } from './can-activate.page';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  {
    path: '',
    component: CanActivatePage,
    canActivate: [ CanActivateGuard ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CanActivatePage],
  providers: [CanActivateGuard]
})
export class CanActivatePageModule {}
