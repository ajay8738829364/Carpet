import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyingMasterComponent } from './dying-master.component';

describe('DyingMasterComponent', () => {
  let component: DyingMasterComponent;
  let fixture: ComponentFixture<DyingMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyingMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
