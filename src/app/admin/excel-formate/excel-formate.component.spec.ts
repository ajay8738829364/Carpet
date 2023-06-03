import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelFormateComponent } from './excel-formate.component';

describe('ExcelFormateComponent', () => {
  let component: ExcelFormateComponent;
  let fixture: ComponentFixture<ExcelFormateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelFormateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelFormateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
