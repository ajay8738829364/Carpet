import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuyerOrderListComponent } from './view-buyer-order-list.component';

describe('ViewBuyerOrderListComponent', () => {
  let component: ViewBuyerOrderListComponent;
  let fixture: ComponentFixture<ViewBuyerOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuyerOrderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBuyerOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
