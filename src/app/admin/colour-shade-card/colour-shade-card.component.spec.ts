import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourShadeCardComponent } from './colour-shade-card.component';

describe('ColourShadeCardComponent', () => {
  let component: ColourShadeCardComponent;
  let fixture: ComponentFixture<ColourShadeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourShadeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColourShadeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
