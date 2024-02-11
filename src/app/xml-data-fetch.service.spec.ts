import { TestBed } from '@angular/core/testing';

import { XmlDataFetchService } from './xml-data-fetch.service';

describe('XmlDataFetchService', () => {
  let service: XmlDataFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlDataFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
