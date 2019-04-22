import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/types/card';
import { Tableau } from 'src/app/types/tableau';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Input() tableau: Tableau;
  
  constructor() { }

  ngOnInit() {
  }

  cardClicked(card: Card){
      if(card.isUpSided){
      this.tableau.popAt(card);
      this.tableau.stock.forEach(element => {
        console.log(element);
      });
    }
  }
}
