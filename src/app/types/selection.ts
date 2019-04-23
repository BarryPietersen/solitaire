import { Card, Suits, Ranks } from './card';
import { IStockable } from '../interfaces/stock-piles'

export class Selection implements IStockable {
    
    public stock: Card[];

    constructor() {
        this.stock = [];
    }

    push(cards: Card[]) {
        if(cards) {
            cards.forEach(c => {
                c.isUpSided = true;
                this.stock.push(c);
            })
        }
    }    
    
    pop(card?: Card) {
        if(this.stock.length > 0) this.stock.pop();
    }

    select(): Card[]{
        if(this.stock.length < 1) throw new Error('the selection stock pile is empty');

        return [this.stock[this.stock.length - 1]];
    }
}