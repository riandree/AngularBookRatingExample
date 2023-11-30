import { Injectable } from '@angular/core';
import { Book } from './book';
import { NUM_OF_STARS } from '../rating/rating.component';

export interface RatingService {
  increaseBookRating(book : Book) : Book;
  decreaseBookRating(book : Book) : Book;
}

@Injectable({
  providedIn: 'root'
})
export class BookRatingService implements RatingService {

  increaseBookRating(book : Book) : Book {
    return this.changeBookRate(book,1);
  }

  decreaseBookRating(book : Book) : Book {
    return this.changeBookRate(book,-1);
  }

  changeBookRate(book:Book, change:number) : Book {
      const newRating=book.rating+change;
      if (newRating>=1 && newRating <= NUM_OF_STARS) {
        return {
            ...book,
            rating:book.rating+change
        }
      }
      return {...book};
  }

}
