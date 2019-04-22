import { Component, OnInit, Input } from '@angular/core';
import { Foundation } from 'src/app/types/foundation';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {
  @Input() foundation: Foundation;
  constructor() { }

  ngOnInit() {
  }

  image(): string {
    let index = this.foundation.stock.length;
    if(index > 0) {
      let peek = this.foundation.stock[index];
      return `${peek.suit}${peek.rank}.jpeg`
          // this.image = this.card.isUpSided ?
          //  `${this.card.rank}${this.card.suit}.jpg` : 'blue_back.jpg';
    }

    return 'default faundation background';
  }
}
