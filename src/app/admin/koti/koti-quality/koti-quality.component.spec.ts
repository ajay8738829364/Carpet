import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotiQualityComponent } from './koti-quality.component';

describe('KotiQualityComponent', () => {
  let component: KotiQualityComponent;
  let fixture: ComponentFixture<KotiQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotiQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotiQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
