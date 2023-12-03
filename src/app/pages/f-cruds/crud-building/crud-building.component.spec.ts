import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBuildingComponent } from './crud-building.component';

describe('CrudBuildingComponent', () => {
  let component: CrudBuildingComponent;
  let fixture: ComponentFixture<CrudBuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudBuildingComponent]
    });
    fixture = TestBed.createComponent(CrudBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
