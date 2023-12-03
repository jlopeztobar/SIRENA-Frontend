import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoordComponent } from './home-coord.component';

describe('HomeCoordComponent', () => {
  let component: HomeCoordComponent;
  let fixture: ComponentFixture<HomeCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCoordComponent]
    });
    fixture = TestBed.createComponent(HomeCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
