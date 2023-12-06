import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { RatingComponent } from '../rating/rating.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RatingComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {

  private modalService = inject(NgbModal);

  private currentRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private bookStoreService = inject(BookStoreService);
  book$?:Observable<Book>;
  error?:HttpErrorResponse;

  ngOnInit(): void {
/*
      this.currentRoute.paramMap.subscribe((params : any) => {  // Diese Verschachtelung von Observable Subscriptions
      const isbn = params.get("isbn");                        // birgt das Riskiko von Race Conditions   
      if (isbn) {
        this.bookStoreService.getSingle(isbn)
          .pipe(catchError((error : HttpErrorResponse) => {
            this.error=error;
            return throwError(() => new Error(JSON.stringify(error)));
          }))
          .subscribe((b:Book) => this.book = b);
      }
      // würde hier alternativ statisch this.router.snapshot.paramMap.get('isbn') verwendet werden
      // dann kommt es zu Problemen bei interner Navigation wenn DIESE Komponente schon aktiv ist.
      // Zum Beispiel bei Klick auf "zum Angular Buch"
      // Statt dieses "Pull" basierten Ansatzes sollte daher eher der o.g. auf Observables basierende
      // Ansatz verwendet werden.
    });*/
    this.book$=this.currentRoute.paramMap
      .pipe(
        map(params => params.get('isbn')!),
        switchMap(isbn => this.bookStoreService.getSingle(isbn))       
      ); /* nicht benötigt da die "async" Pipe verwendet wird   .subscribe((b:Book) => this.book = b); */
  }

  openDeleteConfirmDialog(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	}

  doDelete(b:NgbActiveModal) {
    if (this.book$) {
      this.book$.subscribe(book => {
        this.bookStoreService.removeBook(book.isbn).subscribe(()=> {
          b.close();
          this.router.navigate(['/']);
        });      
      });
    }
  }
}

/**
 * ToDo
 * - Buch laden anhand der Parameter aus der URL
 * - link zum Dashboard
 * - amazon link (https://www.amazon.de/show/dp/3864909465/)
 */