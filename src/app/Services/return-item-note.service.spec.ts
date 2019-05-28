import { TestBed } from '@angular/core/testing';

import { ReturnItemNoteService } from './return-item-note.service';

describe('ReturnItemNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturnItemNoteService = TestBed.get(ReturnItemNoteService);
    expect(service).toBeTruthy();
  });
});
