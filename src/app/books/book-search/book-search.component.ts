import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { EMPTY, Observable, concatMap, debounceTime, filter, of, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';


@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, RouterLink ],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})
export class BookSearchComponent {

  searchControl = new FormControl('',{nonNullable : true});
  private bookStore = inject(BookStoreService);
  
  bookList$ : Observable<Book[]>=this.searchControl.valueChanges
          .pipe(
            filter((term) => term.length >= 3 || term.length===0), // term.length===0 : Wenn Feld gelöscht wird soll auch Suchergebnis entfernt werden (s.u. else Zweig)
            debounceTime(300),
            switchMap(term => {
              if (term) {
                return this.bookStore.search(term)
              } else {
                return of([]);
              } 
            })
          );

}
