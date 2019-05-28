import { TestBed } from '@angular/core/testing';

import { ShippingNoteService } from './shipping-note.service';

describe('ShippingNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShippingNoteService = TestBed.get(ShippingNoteService);
    expect(service).toBeTruthy();
  });
});
