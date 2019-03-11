import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { BlockingResolverPage } from './blocking-resolver.page';
import { BlockingResolver } from './blocking.resolver';

const routes: Routes = [
  {
    path: '',
    component: BlockingResolverPage,
    resolve: {
      data: BlockingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlockingResolverPage],
  providers: [BlockingResolver]
})
export class BlockingResolverPageModule {}
