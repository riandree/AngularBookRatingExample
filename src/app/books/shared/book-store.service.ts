import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

type BookListT = Book[];

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private readonly apiUrl = 'https://api.angular.schule';

  constructor(private http:HttpClient) {}

  getAllBooks() : Observable<BookListT> {
    return this.http.get<BookListT>(this.apiUrl+'/books');
  }

  removeBook(isbn : string) {
  }

  getSingle(isbn : string) : Observable<Book> {
    return this.http.get<Book>(this.apiUrl+`/books/${isbn}`);
  }
  
  createBook(book : Book) : Observable<Book> {
    return this.http.post<Book>(this.apiUrl+'/books',book);
  }
  
  search(searchterm : string) : Observable<BookListT> {
    return this.http.get<BookListT>(this.apiUrl+`/books/search/${searchterm}`);
  }
}
