import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

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
  private bookStore:BookStoreService=inject(BookStoreService);

  //constructor(private bookRatingService:BookRatingService) {}

  ngOnInit(): void {
    this.bookStore.getAllBooks().subscribe((booklist) => {  // unsubscribe hier nicht notwendig, da singulärer Http-Request
      this._books = booklist;
    });  // ToDo : Error handling
  }

  bookRateChanged(book:Book, change:number) {
      if (change>0) {
        this._books=this._books.map((b,idx) => b.isbn === book.isbn ? this.bookRatingService.increaseBookRating(b) : b);
      } else {
        this._books=this._books.map((b,idx) => b.isbn === book.isbn ? this.bookRatingService.decreaseBookRating(b) : b);
      }
  }

}
