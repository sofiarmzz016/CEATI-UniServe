import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisticGroupsComponent } from './artistic-groups.component';

describe('ArtisticGroupsComponent', () => {
  let component: ArtisticGroupsComponent;
  let fixture: ComponentFixture<ArtisticGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisticGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisticGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
