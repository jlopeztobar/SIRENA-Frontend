import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereservationComponent } from './createreservation.component';

describe('CreatereservationComponent', () => {
  let component: CreatereservationComponent;
  let fixture: ComponentFixture<CreatereservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatereservationComponent]
    });
    fixture = TestBed.createComponent(CreatereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});