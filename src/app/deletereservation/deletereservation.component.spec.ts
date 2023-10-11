import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletereservationComponent } from './deletereservation.component';

describe('DeletereservationComponent', () => {
  let component: DeletereservationComponent;
  let fixture: ComponentFixture<DeletereservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletereservationComponent]
    });
    fixture = TestBed.createComponent(DeletereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
