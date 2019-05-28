import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckQualityComponent } from './check-quality.component';

describe('CheckQualityComponent', () => {
  let component: CheckQualityComponent;
  let fixture: ComponentFixture<CheckQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
