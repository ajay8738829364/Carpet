import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotiContainerReceivedComponent } from './koti-container-received.component';

describe('KotiContainerReceivedComponent', () => {
  let component: KotiContainerReceivedComponent;
  let fixture: ComponentFixture<KotiContainerReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotiContainerReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotiContainerReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
