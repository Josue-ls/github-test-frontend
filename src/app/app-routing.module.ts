import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  { path: '', redirectTo: 'commits', pathMatch: 'full' },
  {
    path: 'commits',
    component: GithubComponent,
    loadChildren: () =>
      import('./github/github.module').then((m) => m.GithubModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
