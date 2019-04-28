import { Card, Suits, Ranks } from './card'
import { IStockable } from '../interfaces/stock-piles'

export class Foundation implements IStockable {

    public suit: Suits;
    public stock: Card[];
    public highlightGUI: Function;

    constructor(suit: Suits) {
        this.suit = suit;
        this.stock = [];
    }

    public push(cards: Card[]) {
        if(cards && cards.length === 1 && this.validatePush(cards[0])) {
            cards[0].isUpSided = true;
            let newStock = [...this.stock, cards[0]];
            this.stock = newStock;
            if (cards[0].rank == Ranks.KING) { /* foundation complete event */ };
            return true;
        }
        else
            return false;
        
    }

    public pop() {
        if(this.stock.length > 0) {
            this.stock.pop();
        }
        else
            throw new Error('empty stack');
    }

    public select(card?: Card): Card[] {
        if(this.stock.length > 0) {
            return [this.stock[this.stock.length - 1]];
        }
    }

    highlight(card: Card, isHighlighted: boolean) {
        if(card) {
          this.highlightGUI(card, isHighlighted);
        }
    }

    private validatePush(card: Card): boolean {
        if (!card) throw new Error('invalid card operation');

        if (card.suit != this.suit) return false;
        else if (this.stock.length > 0)
        {
            return card.rank - 1 === this.stock[this.stock.length - 1].rank;
        }
        else
            return (card.rank === Ranks.ACE);
    }
}