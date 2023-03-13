import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingLabourLedgerComponent } from './finishing-labour-ledger.component';

describe('FinishingLabourLedgerComponent', () => {
  let component: FinishingLabourLedgerComponent;
  let fixture: ComponentFixture<FinishingLabourLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishingLabourLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishingLabourLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
