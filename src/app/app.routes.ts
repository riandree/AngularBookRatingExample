import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'books', 
        pathMatch : 'full'
    }, {
        path : 'books',
        // Lazy Loading des Books Feature
        // Achtung !! Hier darf oben KEIN Import auf z.b. books.routes.ts stattfinden da dann
        // wieder der Code des Books-Feature direkt gebundelt werden würde!
        // Hier darf der Import also erst programmatisch zur Laufzeit stattfinden!!
        // Bei dem Import hier handelt es sich um einen dynamischen Typescript-Import
        // (z.b. https://mariusschulz.com/blog/dynamic-import-expressions-in-typescript)
        loadChildren : () => import('./books/books.routes').then(m => m.booksRoutes)
    }
];
