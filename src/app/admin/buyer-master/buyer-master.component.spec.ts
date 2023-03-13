import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerMasterComponent } from './buyer-master.component';

describe('BuyerMasterComponent', () => {
  let component: BuyerMasterComponent;
  let fixture: ComponentFixture<BuyerMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
