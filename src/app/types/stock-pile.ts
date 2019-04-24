import { Card, Suits, Ranks } from './card';
import { IStockable } from '../interfaces/stock-piles'

export class StockPile implements IStockable {

    stock: Card[];

    constructor(cards: Card[]) {
        this.stock = cards
        this.stock.forEach(c => c.isUpSided = false);
    }

    push(cards: Card[]) {
        if(cards) {
            cards.forEach(c => c.isUpSided = false);
            this.stock.unshift(...cards);
            return true;
        }

        return false;
    }

    pop(card?: Card) {
        if(this.stock.length > 0) this.stock.pop();
    } 

    select(card?: Card): Card[] {
        throw new Error("Method not implemented.");
    }
}