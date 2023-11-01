import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomViewComponent } from './classroom-view.component';

describe('ClassroomViewComponent', () => {
  let component: ClassroomViewComponent;
  let fixture: ComponentFixture<ClassroomViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomViewComponent]
    });
    fixture = TestBed.createComponent(ClassroomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
