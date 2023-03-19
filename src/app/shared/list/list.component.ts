import { Component, Input, OnInit } from '@angular/core';
import { Commit } from '../models/commit.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() commit!: Commit;

  constructor() {}

  ngOnInit(): void {}
}
