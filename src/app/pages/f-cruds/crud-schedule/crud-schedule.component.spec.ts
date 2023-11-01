import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDScheduleComponent } from './crud-schedule.component';

describe('CRUDScheduleComponent', () => {
  let component: CRUDScheduleComponent;
  let fixture: ComponentFixture<CRUDScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CRUDScheduleComponent]
    });
    fixture = TestBed.createComponent(CRUDScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
