import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByerListComponent } from './view-byer-list.component';

describe('ViewByerListComponent', () => {
  let component: ViewByerListComponent;
  let fixture: ComponentFixture<ViewByerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewByerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
