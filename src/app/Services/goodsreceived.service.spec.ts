import { TestBed } from '@angular/core/testing';

import { GoodsreceivedService } from './goodsreceived.service';

describe('GoodsreceivedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodsreceivedService = TestBed.get(GoodsreceivedService);
    expect(service).toBeTruthy();
  });
});
