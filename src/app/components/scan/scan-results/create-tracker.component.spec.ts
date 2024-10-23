import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrackerComponent } from './create-tracker.component';

describe('ProductOverviewComponent', () => {
  let component: CreateTrackerComponent;
  let fixture: ComponentFixture<CreateTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
