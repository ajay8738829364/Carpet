import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagatMasterComponent } from './lagat-master.component';

describe('LagatMasterComponent', () => {
  let component: LagatMasterComponent;
  let fixture: ComponentFixture<LagatMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagatMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LagatMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
