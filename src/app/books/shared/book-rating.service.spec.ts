import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

const createBook = (rating : number) : Book => {
  return {
    description : "Desc",
    isbn : "123",
    price : 42,
    title : "title",
    rating
  };
}

describe('BookRatingService', () => {
  let service: BookRatingService;
  let bookDummy : Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Instanz des Service für Test erzeugen und Dependencies injizieren.
    service = TestBed.inject(BookRatingService);
    bookDummy = createBook(3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase a book rating by one when a book is rated up', () => {
    bookDummy.rating=3;
    const book=service.increaseBookRating(bookDummy);
    expect(book.rating).toBe(4);
  });

  it('should decrease a book rating by one when a book is rated down', () => {
    bookDummy.rating=3;
    const book=service.decreaseBookRating(bookDummy);
    expect(book.rating).toBe(2);
  });

  it('should not rate below 1', () => {
    bookDummy.rating=1;
    const book=service.decreaseBookRating(bookDummy);
    expect(book.rating).toBe(1);
  });

  it('should not rate higher than 5', () => {
    bookDummy.rating=5;
    const book=service.increaseBookRating(bookDummy);
    expect(book.rating).toBe(5);
  }); 

  it('should return a copy and not the book itself', () => {
    const book=service.increaseBookRating(bookDummy);
    expect(bookDummy).not.toBe(book);
  });

});
