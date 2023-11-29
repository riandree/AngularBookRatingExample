import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import range from 'lodash/range';

type GivenStartT = { 
  notGivenStar : boolean
}

const NUM_OF_STARS = 5;

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html', 
  styleUrl: './rating.component.scss'
})
export class RatingComponent implements OnInit {
   
  @Input({required:true})
  value : number = 0;
 
  stars : GivenStartT[] = this.starsFromValue(0);

  ngOnInit(): void {
    this.stars=this.starsFromValue(this.value);
  }

  starsFromValue(value : number) : GivenStartT[] {
    return range(1,NUM_OF_STARS+1).map(starNr => ({ notGivenStar : starNr > value}))
  }

}
