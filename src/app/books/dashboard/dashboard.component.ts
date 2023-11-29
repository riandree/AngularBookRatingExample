import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  books : Book[] = [];

  constructor() {
    [{
        isbn : "123-1234568-0",
        description : "Some very important text",
        price: 42.99,
        rating: 5,
        title: "The Answer"
    },
    {
      isbn : "123-1234568-1",
      description : "Some other important text",
      price: 82.99,
      rating: 5,
      title: "The Question"
    },{
      isbn : "123-1234568-2",
      description : "Some useless book",
      price: 12.21,
      rating: 2,
      title: "Dummy"
    }].forEach((b) => {this.books.push(b)});
  }
}
