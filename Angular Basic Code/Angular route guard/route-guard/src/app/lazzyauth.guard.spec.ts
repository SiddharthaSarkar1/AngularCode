import { TestBed } from '@angular/core/testing';

import { LazzyauthGuard } from './lazzyauth.guard';

describe('LazzyauthGuard', () => {
  let guard: LazzyauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LazzyauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
