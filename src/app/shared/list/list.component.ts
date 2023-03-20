import { Component, Input, OnInit } from '@angular/core';
import { Commit, CommitSocket } from '../models/commit.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() commit!: any;

  constructor() {}

  ngOnInit(): void {}
}
