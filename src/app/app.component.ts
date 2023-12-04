import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'Bücher Bewertungen';
  today = new Date();
  currentTime = new Date();

  private intervalTimerHandle! : number;
  
  constructor() {
    this.intervalTimerHandle=setInterval(() => {
      this.currentTime = new Date();
    },1000) as unknown as number;
    console.log(typeof this.intervalTimerHandle);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalTimerHandle);
  }
}
