import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeButtonComponent } from './time-button.component';

describe('TimeButtonComponent', () => {
  let component: TimeButtonComponent;
  let fixture: ComponentFixture<TimeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
