import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/types/card';
import { Tableau } from 'src/app/types/tableau';
import { IClickedStockPile } from 'src/app/interfaces/event-data';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit { 
  @Input() tableau: Tableau;
  @Output() componentBaseClicked = new EventEmitter<Tableau>();
  @Output() componentCardClicked = new EventEmitter<IClickedStockPile>();
  
  constructor() { }

  ngOnInit() {
    this.tableau.highlightGUI = this.highlightCard;
   }

  baseClicked() {
    if(this.tableau.stock.length === 0) {
      this.componentBaseClicked.emit(this.tableau);
    }
  }

  cardClicked(card: Card) {
    if(card.isUpSided) {
      this.notify(card, false);
    }
  }

  cardDblClicked(card: Card) {
    if(card.isUpSided && this.tableau.select(card).length === 1) {
      this.notify(card, true);
    }
  }

  notify(card: Card, _wasDblClicked: boolean) {
    this.componentCardClicked.emit({ 
      card: card,
      stockPile: this.tableau,
      wasDblClicked: _wasDblClicked
    });
  }

  highlightCard(card: Card, isHighlighted: boolean, cards?: Card[]) {
    if(card || cards) {
      if(isHighlighted) {
        let borderstyle = 'solid 2px blue';
        let topcard = document.getElementById(cards[0].toString());
        let bottomcard = document.getElementById(cards[cards.length - 1].toString());

        topcard.style.borderTop = borderstyle;
        topcard.style.borderLeft = borderstyle;
        topcard.style.borderRight = borderstyle;

        bottomcard.style.borderLeft = borderstyle;
        bottomcard.style.borderRight = borderstyle;
        bottomcard.style.borderBottom = borderstyle;

        for(let i = 1; i < cards.length; i++) {
          let current = document.getElementById(cards[i].toString());

          current.style.borderLeft = borderstyle;
          current.style.borderRight = borderstyle;
        }
      }
      else {
        cards.forEach(c =>
           document.getElementById(c.toString()).style.border = '')
      }
    }
  }
}
