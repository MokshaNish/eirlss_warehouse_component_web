import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterStockRecordComponent } from './master-stock-record.component';

describe('MasterStockRecordComponent', () => {
  let component: MasterStockRecordComponent;
  let fixture: ComponentFixture<MasterStockRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterStockRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterStockRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
