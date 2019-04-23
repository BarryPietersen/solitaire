import { Card, Suits, Ranks } from './card'
import { IStockable } from '../interfaces/stock-piles'

export class Tableau implements IStockable{

    public stock: Card[];

    constructor() {
        this.stock = [];
    }

    public push(cards: Card[]) {
        if(cards) {
            let newStock: Card[] = [];
            this.stock.forEach(c => newStock.push(c));

            cards.forEach(c => {
                if(this.validPush(c, newStock)) {
                    newStock.push(c);
                } 
                else {
                    // abort the push operation
                    // notify the tableau which
                    // the card[] was selected from
                    // to cancel pop()
                    return false;
                }
            })

            this.stock = newStock;
            return true;
        }
        else
            throw new Error('empty set or undefined');
    }

    public pop(card: Card){
        
        let i = this.stock.findIndex(c => c.suit === card.suit && c.rank === card.rank && c.isUpSided)

        if(i > -1) {
            for(let j = this.stock.length - 1; j >= i; j--){
                this.stock.pop();
            }

            if(this.stock.length > 0) this.stock[this.stock.length - 1].flip();
        }
        else
            throw new Error('card not found in tableau stock');
    }

    // returns all the child cards in the tableau starting from the specified card
    public select(card: Card): Card[]{

        let i = this.stock.findIndex(c => c.suit === card.suit && c.rank === card.rank && c.isUpSided)

        if(i > -1) {
            let cards: Card[] = [];
            for(; i < this.stock.length; i++){
                cards.push(this.stock[i]);
            }

            return cards;
        }
        else
            throw new Error('card not found in tableau stock');
    }

    private validPush(card: Card, stock: Card[]): boolean {
        if(!card || card.isUpSided === false) return false;

        if(stock.length > 0) {
            let peek: Card = stock[stock.length - 1];
            let peekSuit: boolean = peek.suit === Suits.CLUBS || peek.suit === Suits.SPADES;
            let cardSuit: boolean = card.suit === Suits.CLUBS || card.suit === Suits.SPADES;

            return peekSuit != cardSuit && peek.rank + 1 === card.rank;
        }
        else
            return card.rank === Ranks.KING;
    }
}