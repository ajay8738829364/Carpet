import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingProcessComponent } from './finishing-process.component';

describe('FinishingProcessComponent', () => {
  let component: FinishingProcessComponent;
  let fixture: ComponentFixture<FinishingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishingProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
