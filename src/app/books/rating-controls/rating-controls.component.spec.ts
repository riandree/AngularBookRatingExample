import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingControlsComponent } from './rating-controls.component';

describe('RatingControlsComponent', () => {
  let component: RatingControlsComponent;
  let fixture: ComponentFixture<RatingControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
