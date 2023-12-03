import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProgramsComponent } from './crud-programs.component';

describe('CrudProgramsComponent', () => {
  let component: CrudProgramsComponent;
  let fixture: ComponentFixture<CrudProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudProgramsComponent]
    });
    fixture = TestBed.createComponent(CrudProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
