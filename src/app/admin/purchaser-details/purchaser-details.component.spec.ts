import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserDetailsComponent } from './purchaser-details.component';

describe('PurchaserDetailsComponent', () => {
  let component: PurchaserDetailsComponent;
  let fixture: ComponentFixture<PurchaserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
