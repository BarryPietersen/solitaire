import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Foundation } from 'src/app/types/foundation';
import { IClickedStockPile } from 'src/app/interfaces/event-data';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {
  
  @Input() foundation: Foundation;
  @Output() notify: EventEmitter<IClickedStockPile> = new EventEmitter<IClickedStockPile>();

  constructor() { }

  ngOnInit() {
  }

  foundationClicked(card: Card) {
    if(card.isUpSided) {
      // notify event manager of the card
      // and this tableau
      this.notify.emit({ card: card, stockPile: this.foundation });
    }
  }
}
