import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodInwardsComponent } from './good-inwards.component';

describe('GoodInwardsComponent', () => {
  let component: GoodInwardsComponent;
  let fixture: ComponentFixture<GoodInwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodInwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
