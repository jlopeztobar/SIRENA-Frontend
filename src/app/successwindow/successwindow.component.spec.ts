import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesswindowComponent } from './successwindow.component';

describe('SuccesswindowComponent', () => {
  let component: SuccesswindowComponent;
  let fixture: ComponentFixture<SuccesswindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesswindowComponent]
    });
    fixture = TestBed.createComponent(SuccesswindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
