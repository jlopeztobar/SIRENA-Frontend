import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableclassroomComponent } from './disableclassroom.component';

describe('DisableclassroomComponent', () => {
  let component: DisableclassroomComponent;
  let fixture: ComponentFixture<DisableclassroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisableclassroomComponent]
    });
    fixture = TestBed.createComponent(DisableclassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
