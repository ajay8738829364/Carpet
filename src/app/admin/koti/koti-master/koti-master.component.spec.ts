import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotiMasterComponent } from './koti-master.component';

describe('KotiMasterComponent', () => {
  let component: KotiMasterComponent;
  let fixture: ComponentFixture<KotiMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotiMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotiMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
