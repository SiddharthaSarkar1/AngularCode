import { TestBed } from '@angular/core/testing';

import { ApiuserdataService } from './apiuserdata.service';

describe('ApiuserdataService', () => {
  let service: ApiuserdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiuserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
