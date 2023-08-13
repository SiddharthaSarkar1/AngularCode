import { TestBed } from '@angular/core/testing';

import { MyapidataService } from './myapidata.service';

describe('MyapidataService', () => {
  let service: MyapidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyapidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
