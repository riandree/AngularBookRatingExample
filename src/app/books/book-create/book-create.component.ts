import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn : new FormControl('', { nonNullable : true,
              validators : [ Validators.required, 
                             Validators.minLength(10),
                             Validators.maxLength(13) ]}),  // nonNullable -> ggf. stattfindender Reset findet auf Startwert und 
                                                            // nicht auf null statt und Typ ist string und nicht string | null
    title : new FormControl('', { nonNullable : true,
              validators : [ Validators.required,
                             Validators.maxLength(80) ]}),  
    description : new FormControl('', { nonNullable : true}),  
    price : new FormControl(0, { nonNullable : true,
              validators : [ Validators.required,
                             Validators.min(0) ]}),  
    rating : new FormControl(1, { nonNullable : true, validators : [
              Validators.min(1), Validators.max(5)
    ]})
  });

  isNotValid(controlName : string, errorCode : string) {
    const control=this.bookForm.get(controlName);
//    if (control && control.invalid && control.touched) {
//      const isErrorPresent=control?.errors?.[errorCode];
//      return isErrorPresent;
//    }
    if (control && control.touched) {
      return control.hasError(errorCode);
    }
    return false;        
  }

  submitForm() {
    alert("Submit");
  }
}

/**
 * ToDo :
 * - Submit Button
 * - Validierung incl. Validierungsfehlermeldungen
 * - Formular abschicken und so Buch anlegen. 
 *     - Dann auf Buchseite navigieren.
 *     -  oder Formular für neue Anlage eines weiteren Buches resetten
 *     -  oder Meldung "Buch wurde angelegt"
 * - (Reset Button)
 */
