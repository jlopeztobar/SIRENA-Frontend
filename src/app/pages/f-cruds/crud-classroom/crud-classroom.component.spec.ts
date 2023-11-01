import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDClassroomComponent } from './crud-classroom.component';

describe('CRUDClassroomComponent', () => {
  let component: CRUDClassroomComponent;
  let fixture: ComponentFixture<CRUDClassroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CRUDClassroomComponent]
    });
    fixture = TestBed.createComponent(CRUDClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
