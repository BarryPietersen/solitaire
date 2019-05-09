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
  @Output() componentBaseClicked = new EventEmitter();
  @Output() componentCardClicked = new EventEmitter<Card>();

  constructor() { }

  ngOnInit() { }

  baseClicked() {
    this.componentBaseClicked.emit();
  }

  cardClicked(card?: Card) { }
}
