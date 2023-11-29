import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  private _books : Book[] = []; 
  
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

  get books() : Book[] {
    return this._books;
  }
}
