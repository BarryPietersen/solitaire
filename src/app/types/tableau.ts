import { Card, Suits, Ranks } from './card'

export class Tableau {
    public stock: Card[];

    constructor() {
        this.stock = [];
    }

    public push(cards: Card[], invalidPush: Function) {
        if(cards) {
            let card: Card;
            let newStock: Card[] = [];
            this.stock.forEach(c => newStock.push(c));

            cards.forEach(c => {
                if(this.validPush(c)) {
                    newStock.push(card);
                } 
                else {
                    invalidPush(cards);
                    return;
                }
            })

            this.stock = newStock;
        }
        else
            throw new Error('empty set or undefined');
    }

    public popAt(card: Card): Card[] {
        
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

    private validPush(card: Card): boolean {
        if(!card || card.isUpSided === false) return false;

        if(this.stock.length > 0) {
            let peek: Card = this.stock[this.stock.length - 1];
            let peekSuit: boolean = peek.suit === Suits.CLUBS || peek.suit === Suits.SPADES;
            let cardSuit: boolean = card.suit === Suits.CLUBS || card.suit === Suits.SPADES;

            return peekSuit != cardSuit && peek.rank + 1 === card.rank;
        }
        else
            return card.rank === Ranks.KING;
    }
}