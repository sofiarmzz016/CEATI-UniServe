import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicExchangeComponent } from './academic-exchange.component';

describe('AcademicExchangeComponent', () => {
  let component: AcademicExchangeComponent;
  let fixture: ComponentFixture<AcademicExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicExchangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
