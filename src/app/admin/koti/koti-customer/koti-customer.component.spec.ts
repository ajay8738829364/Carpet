import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotiCustomerComponent } from './koti-customer.component';

describe('KotiCustomerComponent', () => {
  let component: KotiCustomerComponent;
  let fixture: ComponentFixture<KotiCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotiCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotiCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
