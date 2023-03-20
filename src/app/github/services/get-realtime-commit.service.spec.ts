import { TestBed } from '@angular/core/testing';

import { GetRealtimeCommitService } from './get-realtime-commit.service';

describe('GetRealtimeCommitService', () => {
  let service: GetRealtimeCommitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRealtimeCommitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
