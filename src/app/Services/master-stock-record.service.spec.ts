import { TestBed } from '@angular/core/testing';

import { MasterStockRecordService } from './master-stock-record.service';

describe('MasterStockRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterStockRecordService = TestBed.get(MasterStockRecordService);
    expect(service).toBeTruthy();
  });
});
