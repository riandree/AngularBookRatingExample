import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import range from 'lodash/range';

type GivenStarT = { 
  notGivenStar : boolean
}

export const NUM_OF_STARS = 6;

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html', 
  styleUrl: './rating.component.scss'
})
export class RatingComponent implements OnChanges {
   
  @Input({required:true})
  value : number = 0;

  stars : GivenStarT[] = this.starsFromValue(0);

  // Hier nur ngOnInit zu verwenden würde dazu führen, daß die Komponente sich bei späteren
  // Änderungen ihrer Properties nicht mehr aktualisiert.
  ngOnChanges(): void {
    this.stars=this.starsFromValue(this.value);
  }

  starsFromValue(value : number) : GivenStarT[] {
    return range(1,NUM_OF_STARS+1).map(starNr => ({ notGivenStar : starNr > value}))
  }

}
