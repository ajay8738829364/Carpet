import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarsComponent } from './admin-sidebars.component';

describe('AdminSidebarsComponent', () => {
  let component: AdminSidebarsComponent;
  let fixture: ComponentFixture<AdminSidebarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSidebarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSidebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
