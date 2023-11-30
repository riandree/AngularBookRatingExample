import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './books/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-rating';
  today = new Date();
}


/**
 * ToDo :
 * - Datenmodell (z.b. Typescript Interface oder Typ-Alias)
 * - Daten
 * - Anzeige
 * - Komponenten
 *    - für ein einzelnes Buch
 *    - Komponente für Seite mit Liste von Büchern
 */