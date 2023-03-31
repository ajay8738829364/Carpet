import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialGroupComponent } from './raw-material-group.component';

describe('RawMaterialGroupComponent', () => {
  let component: RawMaterialGroupComponent;
  let fixture: ComponentFixture<RawMaterialGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawMaterialGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
