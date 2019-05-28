import { TestBed } from '@angular/core/testing';

import { SupplierGoodsService } from './supplier-goods.service';

describe('SupplierGoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierGoodsService = TestBed.get(SupplierGoodsService);
    expect(service).toBeTruthy();
  });
});
