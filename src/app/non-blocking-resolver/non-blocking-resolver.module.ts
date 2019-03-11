import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { NonBlockingResolverPage } from './non-blocking-resolver.page';
import { NonBlockingResolver } from './non-blocking.resolver';

const routes: Routes = [
  {
    path: '',
    component: NonBlockingResolverPage,
    resolve: {
      data: NonBlockingResolver
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
  declarations: [NonBlockingResolverPage],
  providers: [NonBlockingResolver]
})
export class NonBlockingResolverPageModule {}
