import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/types/card';
import { Tableau } from 'src/app/types/tableau';
import { IStockable } from 'src/app/interfaces/stock-piles';
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

  ngOnInit() { }

  baseClicked() {
    if(this.tableau.stock.length === 0) {
      this.componentBaseClicked.emit(this.tableau);
    }
  }

  cardClicked(card: Card) {
    if(card.isUpSided) {
      this.componentCardClicked.emit({ card: card, stockPile: this.tableau });
    }
  }
}
