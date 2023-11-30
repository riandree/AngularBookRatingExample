import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent  } from './dashboard.component';
import { BookRatingService, RatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const ratingStub : RatingService = {
      increaseBookRating(book: Book): Book {
        throw new Error('Function not implemented.');
      },
      decreaseBookRating(book: Book): Book {
        throw new Error('Function not implemented.');
      }
    };

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [DashboardComponent],
      // BookRatingService durch Test-Stub ersetzen den die Komponente im Test statt des 
      // "echten" Service nutzt.
      providers: [{ provide : BookRatingService, useValue : ratingStub }] 
    }).compileComponents();
    
    // Die "Component under Test" wird im Test in der "Fixture" betrieben
    fixture = TestBed.createComponent(DashboardComponent);
    // Die Komponenteninstanz selbst
    component = fixture.componentInstance;
    
    // Falls notwendig besteht hier zugriff auf das DOM
    //fixture.nativeElement.querySelector("p")
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
