import { Card, Suits, Ranks } from './card'
import { IStockable } from '../interfaces/stock-piles'

export class Tableau implements IStockable {

    public stock: Card[];
    public highlightGUI: Function;

    constructor() {
        this.stock = [];
    }

    public push(cards: Card[]) {
        let head = this.stock.length > 0 ? this.stock[this.stock.length - 1] : null;

        if(cards && this.validatePush(cards, head)) {
            cards.forEach(c => this.stock.push(c));
            return true;
        }
        else
            return false;
    }

    public pop(card: Card) {     
        let i = this.stock.findIndex(c => c.suit === card.suit && c.rank === card.rank && c.isUpSided)

        if(i > -1) {
            for(let j = this.stock.length - 1; j >= i; j--) {
                this.stock.pop();
            }

            if(this.stock.length > 0) this.stock[this.stock.length - 1].isUpSided = true;;
        }
        else
            throw new Error('card not found in tableau stock');
    }

    // returns all the child cards in the tableau starting from the specified card
    public select(card: Card): Card[] {
        let i = this.stock.findIndex(c => c.suit === card.suit && c.rank === card.rank && c.isUpSided)

        if(i > -1) {
            let cards: Card[] = [];
            for(; i < this.stock.length; i++) {
                cards.push(this.stock[i]);
            }

            return cards;
        }
        else
            throw new Error('card not found in tableau stock');
    }

    highlight(card: Card, isHighlighted: boolean) {
        if(card && isHighlighted) {
            // let i = this.stock.findIndex(c => c === card);
            // let cards: Card[] = [];

            // for(; i < this.stock.length; i++) {
            //     cards.push(this.stock[i]);
            // }
            this.highlightGUI(card, true);
        }
        else {
            this.highlightGUI(card, false);
        }
    }

    private validatePush(cards: Card[], head?: Card): boolean { 
        if(!cards && cards.length === 0) return false;
        if(head === null && cards[0].rank != Ranks.KING) return false;
        if(head && !this.validatePair(head, cards[0])) return false;

        let tail: Card;

        for(let i = 1; i < cards.length; i++) {
            head = cards[i - 1];
            tail = cards[i];

            if(!this.validatePair(head, tail)) return false;
        }

        return true;
    }

    private validatePair(head: Card, tail: Card) {
        return head.rank == tail.rank + 1 && tail.isUpSided &&
               this.areDifferentColors(head.suit, tail.suit);
    }

    private areDifferentColors(headSuit: Suits, tailSuit: Suits) {
        return (headSuit === Suits.CLUBS || headSuit === Suits.SPADES) !=
               (tailSuit === Suits.CLUBS || tailSuit === Suits.SPADES)
    }
}