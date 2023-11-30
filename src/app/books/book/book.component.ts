import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { RatingComponent } from '../rating/rating.component';
import { RatingControlsComponent } from '../rating-controls/rating-controls.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, RatingComponent, RatingControlsComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent { 

    @Input()
    book?:Book;

    @Output()
    rateUp = new EventEmitter<Book>();

    @Output()
    rateDown = new EventEmitter<Book>();

    doRateUp() {
      this.rateUp.emit(this.book);
    } 

    doRateDown() {
      this.rateDown.emit(this.book);
    }
}
