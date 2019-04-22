import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card, Ranks, Suits } from '../../types/card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input('i') index: number;
  @Output() notify: EventEmitter<Card> = new EventEmitter<Card>()
  public image: string;

  constructor() {
  }

  ngOnInit() {
    this.index *= 25;
    this.image = this.getImage();
  }

  onClick(){
    this.notify.emit(this.card);
  }

  getImage(){
    let path = '../../assets/images/JPEG/';

    if(this.card.isUpSided === false) return `${path}blue_back.jpg`;

    let rank = this.card.rank === 0 || this.card.rank > 9 ?
     Ranks[this.card.rank][0] : (this.card.rank + 1).toString();
    return `${path}${rank}${Suits[this.card.suit][0]}.jpg`;
  }
}
