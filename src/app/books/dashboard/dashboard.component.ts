import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  _books : Book[] = []; 

  private bookRatingService:BookRatingService=inject(BookRatingService);

  //constructor(private bookRatingService:BookRatingService) {}

  ngOnInit(): void {
    [{
      isbn : "123-1234568-0",
      description : "Some very important text",
      price: 42.99,
      rating: 5,
      title: "The Answer"
    },
    {
      isbn : "123-1234568-42",
      description : "Random Book",
      price: 32.42,
      rating: 3,
      title: "It's random"
    },
    {
      isbn : "123-1234568-1",
      description : "Some other important text",
      price: 82.99,
      rating: 1,
      title: "The Question"
    },
    {
      isbn : "123-1234568-2",
      description : "Some useless book",
      price: 12.21,
      rating: 2,
      title: "Dummy"
    },
    {
      isbn : "123-1234568-4",
      description : "Four stars",
      price: 12.21,
      rating: 4,
      title: "Four or nothing!"
    }].forEach((b) => {this._books.push(b)});
  }

  bookRateChanged(book:Book, change:number) {
      if (change>0) {
        this._books=this._books.map((b,idx) => b.isbn === book.isbn ? this.bookRatingService.increaseBookRating(b) : b);
      } else {
        this._books=this._books.map((b,idx) => b.isbn === book.isbn ? this.bookRatingService.decreaseBookRating(b) : b);
      }
  }

}
