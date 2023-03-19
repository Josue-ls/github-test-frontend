import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github.component';
import { SharedModule } from '../shared/shared.module';
import { GithubService } from './services/get-commits.service';
import { HttpClientModule } from '@angular/common/http';
import { CommitsComponent } from './commits/commits.component';

@NgModule({
  declarations: [GithubComponent, CommitsComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  providers: [GithubService],
})
export class GithubModule {}
