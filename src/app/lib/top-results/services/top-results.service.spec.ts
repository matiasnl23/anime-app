import { TestBed } from '@angular/core/testing';

import { TopResultsService } from './top-results.service';

describe('TopResultsService', () => {
  let service: TopResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
