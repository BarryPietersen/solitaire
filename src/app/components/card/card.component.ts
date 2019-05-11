import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card, Ranks, Suits } from '../../types/card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() clicked = new EventEmitter<Card>()
  @Output() dblClicked = new EventEmitter<Card>()
  private isSingleClick: boolean;
  public face: string;
  public back: string;

  constructor() { }

  ngOnInit() {
    this.face = this.getImage();
    this.back = '../../assets/images/JPEG/blue_back.jpg'
  }

  onClick() {
    this.isSingleClick = true;
    setTimeout(() => {
      if(this.isSingleClick)
        this.clicked.emit(this.card);
    }, 150)
  }

  onDblClick() {
    this.isSingleClick = false;
    this.dblClicked.emit(this.card);
  }

  private getImage() {
    let path = '../../assets/images/JPEG/';
    let rank = this.card.rank === 0 || this.card.rank > 9 ?
     Ranks[this.card.rank][0] : (this.card.rank + 1).toString();

    return `${path}${rank}${Suits[this.card.suit][0]}.jpg`;
  }
}
