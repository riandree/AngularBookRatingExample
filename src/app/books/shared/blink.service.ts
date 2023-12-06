import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlinkService {

  private blinkState$ = new Subject<boolean>();
  private currentState = false;
  
  constructor() {
    this.blinkState$.next(this.currentState);
  }

  toggleBlink() {
    this.currentState=!this.currentState;
    this.blinkState$.next(this.currentState);
  }

  get state$() : Observable<boolean> {
    return this.blinkState$;
  }
  
}
