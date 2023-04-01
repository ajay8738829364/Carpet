import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingHeadComponent } from './finishing-head.component';

describe('FinishingHeadComponent', () => {
  let component: FinishingHeadComponent;
  let fixture: ComponentFixture<FinishingHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishingHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
