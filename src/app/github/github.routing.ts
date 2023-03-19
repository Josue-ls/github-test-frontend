import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github.component';
import { CommitsComponent } from './commits/commits.component';

const routes: Routes = [
  {
    path: '',
    component: GithubComponent,
    children: [{ path: 'commits', component: CommitsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubsRoutingModule {}
