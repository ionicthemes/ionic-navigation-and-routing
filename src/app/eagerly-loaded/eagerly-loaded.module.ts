import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EagerlyLoadedPage } from './eagerly-loaded.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [EagerlyLoadedPage]
})
export class EagerlyLoadedPageModule {}
