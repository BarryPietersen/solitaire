import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Foundation } from 'src/app/types/foundation';
import { IClickedStockPile } from 'src/app/interfaces/event-data';
import { Card, Suits } from 'src/app/types/card';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {
  
  @Input() foundation: Foundation;
  @Output() componentCardClicked = new EventEmitter<IClickedStockPile>();
  @Output() componentBaseClicked = new EventEmitter<Foundation>();
  public suitSymbol: string;

  constructor() { }

  ngOnInit() {
    this.suitSymbol = "../../assets/images/JPEG/" + Suits[this.foundation.suit][0] + ".png"
    this.foundation.highlightGUI = this.highlightCard;
  }

  baseClicked() {
    if(this.foundation.stock.length === 0) {
      this.componentBaseClicked.emit(this.foundation);
    }
  }

  cardClicked(card: Card) {
    if(card.isUpSided) {
      this.componentCardClicked.emit({
        card: card,
        stockPile: this.foundation,
        wasDblClicked: false
      });
    }
  }

  highlightCard(card: Card, isHighlighted: boolean) {
    if(card) {
      let el = document.getElementById(card.toString());
      el.style.margin = isHighlighted ? '-1px 0px 0px -1px' : '0px';
      el.style.border = isHighlighted ? 'solid 2px blue' : '';
    }
  }
}
