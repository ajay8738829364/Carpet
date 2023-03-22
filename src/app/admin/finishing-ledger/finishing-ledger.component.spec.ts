import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingLedgerComponent } from './finishing-ledger.component';

describe('FinishingLedgerComponent', () => {
  let component: FinishingLedgerComponent;
  let fixture: ComponentFixture<FinishingLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishingLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishingLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
