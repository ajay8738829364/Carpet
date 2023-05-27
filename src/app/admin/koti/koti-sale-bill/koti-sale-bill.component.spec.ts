import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotiSaleBillComponent } from './koti-sale-bill.component';

describe('KotiSaleBillComponent', () => {
  let component: KotiSaleBillComponent;
  let fixture: ComponentFixture<KotiSaleBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotiSaleBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotiSaleBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
