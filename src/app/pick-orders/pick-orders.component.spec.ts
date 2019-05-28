import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickOrdersComponent } from './pick-orders.component';

describe('PickOrdersComponent', () => {
  let component: PickOrdersComponent;
  let fixture: ComponentFixture<PickOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
