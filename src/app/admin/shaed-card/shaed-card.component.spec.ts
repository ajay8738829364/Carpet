import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaedCardComponent } from './shaed-card.component';

describe('ShaedCardComponent', () => {
  let component: ShaedCardComponent;
  let fixture: ComponentFixture<ShaedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShaedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
