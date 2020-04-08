import { TestBed } from '@angular/core/testing';

import { BlockerGuard } from './blocker.guard';

describe('BlockerGuard', () => {
  let guard: BlockerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlockerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
