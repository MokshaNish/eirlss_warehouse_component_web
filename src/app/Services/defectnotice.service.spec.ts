import { TestBed } from '@angular/core/testing';

import { DefectnoticeService } from './defectnotice.service';

describe('DefectnoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefectnoticeService = TestBed.get(DefectnoticeService);
    expect(service).toBeTruthy();
  });
});
