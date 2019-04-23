import { Card, Suits, Ranks } from './card'
import { IStockable } from '../interfaces/stock-piles'

export class Foundation implements IStockable {

    public suit: Suits;
    public stock: Card[];

    constructor(suit: Suits) {
        this.suit = suit;
        this.stock = [];
    }

    public push(cards: Card[]) {
        if(cards || cards.length === 1){
            if (this.validatePush(cards[0])) {
                this.stock.push(cards[0]);
                cards[0].isUpSided = true;
                if (cards[0].rank == Ranks.KING) { /* foundation complete event */ };
            }
            else
                throw new Error('invalid foundation push operation');
        }
    }

    public pop(){
        if(this.stock.length > 0){
            this.stock.pop();
        }
        else
            throw new Error('empty stack');
    }

    public select(card: Card): Card[]{
        if(this.stock.length > 1){
            return [this.stock[this.stock.length - 1]];
        }
    }

    private validatePush(card: Card): boolean {
        if (!card) throw new Error('invalid card operation');

        if (card.suit != this.suit) return false;
        else if (this.stock.length > 0)
        {
            return card.rank - 1 === this.stock[this.stock.length - 1].rank
        }
        else if (card.rank === Ranks.ACE)
        {
            return true;
        }

        return false;
    }
}