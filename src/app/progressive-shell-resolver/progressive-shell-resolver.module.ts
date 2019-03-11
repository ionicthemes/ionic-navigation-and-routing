import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ProgressiveShellResolverPage } from './progressive-shell-resolver.page';
import { ProgressiveShellResolver } from './progressive-shell.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProgressiveShellResolverPage,
    resolve: {
      data: ProgressiveShellResolver
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
  declarations: [ProgressiveShellResolverPage],
  providers: [ProgressiveShellResolver]
})
export class ProgressiveShellResolverPageModule {}
