import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deck } from 'src/app/types/deck';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  @Input() deck: Deck;
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  deckClicked(card?: Card) {
    this.notify.emit({});
  }
}
