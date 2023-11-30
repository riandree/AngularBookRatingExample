import { Component,EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NUM_OF_STARS } from '../rating/rating.component';

@Component({
  selector: 'app-rating-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-controls.component.html', 
  styleUrl: './rating-controls.component.scss'
})
export class RatingControlsComponent implements OnChanges {

  @Input({required:true})
  currentRating : number = 0;

  @Output()
  private up = new EventEmitter();

  @Output()
  private down = new EventEmitter();

  upEnabled : boolean = false;
  downEnabled : boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.upEnabled = this.currentRating < NUM_OF_STARS;
    this.downEnabled = this.currentRating > 1;
  }

  rateUp() {
    this.up.emit();
  }

  rateDown() {
    this.down.emit();
  }

}
