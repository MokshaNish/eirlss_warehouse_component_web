import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectNoticeComponent } from './defect-notice.component';

describe('DefectNoticeComponent', () => {
  let component: DefectNoticeComponent;
  let fixture: ComponentFixture<DefectNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
