import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanPasteLinkComponent } from './scan-paste-link.component';

describe('AddTrackerComponent', () => {
  let component: ScanPasteLinkComponent;
  let fixture: ComponentFixture<ScanPasteLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanPasteLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanPasteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
