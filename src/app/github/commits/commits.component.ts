import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/get-commits.service';
import { Commit } from '../../shared/models/commit.model';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss'],
})
export class CommitsComponent implements OnInit {
  commitList: Commit[] = [];
  constructor(private readonly githubService: GithubService) {}

  ngOnInit() {
    this.getCommits();
  }

  getCommits() {
    this.githubService.getCommits('github-test-backend').subscribe({
      next: (data) => Object.assign(this.commitList, data),
      error: (e) => console.error(e),
    });
  }
}
