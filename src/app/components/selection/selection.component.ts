import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Selection } from 'src/app/types/selection';
import { IClickedStockPile } from 'src/app/interfaces/event-data';
import { Card, Suits } from 'src/app/types/card';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  @Input() selection: Selection;
  @Output() notify = new EventEmitter<IClickedStockPile>();

  constructor() { }

  ngOnInit() { }

  selectionClicked(card: Card) {
    if(card.isUpSided) {
      this.notify.emit({
          card: card,
          stockPile: this.selection 
        });
    }
  }
}
