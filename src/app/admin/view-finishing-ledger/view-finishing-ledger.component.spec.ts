import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinishingLedgerComponent } from './view-finishing-ledger.component';

describe('ViewFinishingLedgerComponent', () => {
  let component: ViewFinishingLedgerComponent;
  let fixture: ComponentFixture<ViewFinishingLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFinishingLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFinishingLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
