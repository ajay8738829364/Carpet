import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityDesignComponent } from './quality-design.component';

describe('QualityDesignComponent', () => {
  let component: QualityDesignComponent;
  let fixture: ComponentFixture<QualityDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
