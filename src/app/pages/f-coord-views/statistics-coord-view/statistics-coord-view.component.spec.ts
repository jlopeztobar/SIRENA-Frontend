import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsCoordViewComponent } from './statistics-coord-view.component';

describe('StatisticsCoordViewComponent', () => {
  let component: StatisticsCoordViewComponent;
  let fixture: ComponentFixture<StatisticsCoordViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsCoordViewComponent]
    });
    fixture = TestBed.createComponent(StatisticsCoordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
