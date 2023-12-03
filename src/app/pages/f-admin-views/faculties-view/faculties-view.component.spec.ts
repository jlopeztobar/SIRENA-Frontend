import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesViewComponent } from './faculties-view.component';

describe('FacultiesViewComponent', () => {
  let component: FacultiesViewComponent;
  let fixture: ComponentFixture<FacultiesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultiesViewComponent]
    });
    fixture = TestBed.createComponent(FacultiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
