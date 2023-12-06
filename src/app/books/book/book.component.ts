import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { RatingComponent } from '../rating/rating.component';
import { RatingControlsComponent } from '../rating-controls/rating-controls.component';
import { RouterLink } from '@angular/router';
import { Observable, timer, map, combineLatest, filter } from 'rxjs';
import { BlinkService } from '../shared/blink.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, RouterLink, RatingComponent, RatingControlsComponent],
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

    background$! : Observable<string>;

    constructor(private blinkService:BlinkService) {
      const random = (max : number) =>  Math.round(Math.random()*max);
      this.background$=combineLatest(
        timer(0,random(500)).pipe(
          map(()=> {
            const rgb=[...Array(3)].map(() => random(256))
            const style=`rgb(${rgb[0]},${rgb[1]},${rgb[2]}) !important`;
            return style;
          })
        ),
        blinkService.state$
      ).pipe(
        filter(([color,blinking]) => { return blinking }),
        map(([color,blinking]) => color)
      );
    }

    doRateUp() {
      this.rateUp.emit(this.book);
    } 

    doRateDown() {
      this.rateDown.emit(this.book);
    }
}
