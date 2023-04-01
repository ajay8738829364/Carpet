import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourCodeDyeingDetailComponent } from './colour-code-dyeing-detail.component';

describe('ColourCodeDyeingDetailComponent', () => {
  let component: ColourCodeDyeingDetailComponent;
  let fixture: ComponentFixture<ColourCodeDyeingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourCodeDyeingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColourCodeDyeingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
