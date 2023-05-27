import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotiContainerDispatchComponent } from './koti-container-dispatch.component';

describe('KotiContainerDispatchComponent', () => {
  let component: KotiContainerDispatchComponent;
  let fixture: ComponentFixture<KotiContainerDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotiContainerDispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotiContainerDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
