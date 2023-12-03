import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFacultiesComponent } from './crud-faculties.component';

describe('CrudFacultiesComponent', () => {
  let component: CrudFacultiesComponent;
  let fixture: ComponentFixture<CrudFacultiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudFacultiesComponent]
    });
    fixture = TestBed.createComponent(CrudFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
