import { Card, Suits, Ranks } from './card';
import { IStockable } from '../interfaces/stock-piles'

export class Selection implements IStockable {
    
    public stock: Card[];
    public peek: Card;
    public highlightGUI: Function;

    constructor() {
        this.stock = [];
    }

    push(cards: Card[]): boolean {
        if(cards && cards.length === 1 && !cards[0].isUpSided) {
            if(this.stock.length > 0) {
                let peek = this.select();
                this.highlight(peek[0], false);
            }

            let newCard = cards[0];

            newCard.isUpSided = true;
            this.stock.push(newCard);
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

    highlight(card: Card, isHighlighted: boolean) {
        if(card) {
            this.highlightGUI(card, isHighlighted);
        }
    }
}