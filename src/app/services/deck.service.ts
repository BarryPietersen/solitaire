import { Injectable } from '@angular/core';
import { Deck } from 'src/app/types/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  constructor() { }

  public getDeck(shuffle?: boolean) {
    return new Deck(shuffle);
  }
}
