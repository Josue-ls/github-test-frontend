import { Component, OnDestroy, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Subscription } from 'rxjs';
import {
  Commit,
  CommitSocket,
  SenderCommit,
} from '../../shared/models/commit.model';
import { GithubService } from '../services/get-commits.service';
import { GetRealtimeCommitService } from '../services/get-realtime-commit.service';
import { SenderData } from '../../shared/models/commit.model';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss'],
})
export class CommitsComponent implements OnInit, OnDestroy {
  commitList: Commit[] = [];
  commitRealTime: CommitSocket[] = [];
  private _messageSubscription!: Subscription;

  constructor(
    private readonly githubService: GithubService,
    private readonly socketService: GetRealtimeCommitService
  ) {}

  ngOnInit() {
    this.getCommits();
    this.getRealtimeCommit();
  }

  getCommits() {
    this.commitRealTime = [];
    this.githubService.getCommits('github-test-frontend').subscribe({
      next: (data) => Object.assign(this.commitList, data),
      error: (e) => console.error(e),
    });
  }

  getRealtimeCommit() {
    this.socketService.connect();
    this._messageSubscription = this.socketService
      .on('emitCommit')
      .subscribe((data) => {
        this.getCommitSocket(data);
      });
  }

  getCommitSocket({
    commits,
    sender,
  }: {
    commits: [];
    sender: SenderData;
  }): void {
    commits.forEach((commit: SenderCommit) => {
      console.log({ commit });
      this.commitRealTime.push({
        author: sender.login,
        avatar_url: sender.avatar_url,
        date: commit.timestamp,
        commitId: sender.node_id,
        message: commit.message,
      });
    });
  }

  ngOnDestroy() {
    this._messageSubscription.unsubscribe();
    this.socketService.disconnect();
  }
}
