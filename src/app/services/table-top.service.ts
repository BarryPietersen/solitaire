import { Injectable } from '@angular/core';
import { TableTop } from 'src/app/types/table-top';
import { DeckService } from './deck.service';

@Injectable({
  providedIn: 'root'
})
export class TableTopService {
  constructor(private deckSvc: DeckService) { }
  
  public getTableTop() {
    return new TableTop(this.deckSvc.getDeck(true));
  }
}
