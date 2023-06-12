import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDespatchdataComponent } from './check-despatchdata.component';

describe('CheckDespatchdataComponent', () => {
  let component: CheckDespatchdataComponent;
  let fixture: ComponentFixture<CheckDespatchdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckDespatchdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckDespatchdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
