import { Card, Suits, Ranks } from './card';
import { IStockable } from '../interfaces/stock-piles'

export class Selection implements IStockable {
    
    public stock: Card[];
    public peek: Card;

    constructor() {
        this.stock = [];
    }

    push(cards: Card[]): boolean {
        if(cards && cards.length === 1 && !cards[0].isUpSided) {
            let newCard = cards[0];
            newCard.flip();
            let newStock = [...this.stock, newCard];
            //this.peek = cards[0];
            this.stock = newStock;//.push(cards[0]);
            return true;
        }
        return false;
    }    
    
    pop(card?: Card) {
        if(this.stock.length > 0) this.stock.pop();
        else
            throw new Error('the selection stock pile is empty');
    }

    select(): Card[] {
        if(this.stock.length < 1) throw new Error('the selection stock pile is empty');

        return [this.stock[this.stock.length - 1]];
    }
}