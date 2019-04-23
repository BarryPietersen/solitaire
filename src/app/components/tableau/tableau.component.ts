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
  @Output() notify: EventEmitter<IClickedStockPile> = new EventEmitter<IClickedStockPile>()
  
  constructor() { }

  ngOnInit() {
  }

  cardClicked(card: Card){
    if(card.isUpSided){
      // notify game manager of the card
      // and this tableau
      this.notify.emit({ card: card, stockPile: this.tableau });
    }
  }
}
