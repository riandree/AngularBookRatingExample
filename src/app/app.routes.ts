import { Routes } from '@angular/router';
import { booksRoutes } from './books/books.routes';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'books', 
        pathMatch : 'full'
    },
    ...booksRoutes
];
