import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurescheduleComponent } from './configureschedule.component';

describe('ConfigurescheduleComponent', () => {
  let component: ConfigurescheduleComponent;
  let fixture: ComponentFixture<ConfigurescheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurescheduleComponent]
    });
    fixture = TestBed.createComponent(ConfigurescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
