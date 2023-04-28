import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetStockComponent } from './carpet-stock.component';

describe('CarpetStockComponent', () => {
  let component: CarpetStockComponent;
  let fixture: ComponentFixture<CarpetStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpetStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpetStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
