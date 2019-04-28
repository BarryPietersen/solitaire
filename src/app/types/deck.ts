import { Card, Suits, Ranks } from './card'
import { IStockable } from '../interfaces/stock-piles';

export class Deck implements IStockable {

    public stock: Card[];

    constructor(shuffle: boolean) {
        this.initializeCards();
        if(shuffle) this.shuffle();
    }

    private initializeCards(): void {
        this.stock = [];
        
        // s -> suit, r -> rank
        for(let s = 0; s < 4; s++) {
            for(let r = 0; r < 13; r++) {
                this.stock.push(new Card(s, r));
            }
        }
    }

    public pop(): Card {
        if (this.stock.length > 0)
            return this.stock.pop()
        else
            throw new Error("stack empty");
    }

    public push(cards: Card[]) {
        cards.forEach(c => {
            c.isUpSided = false;
            this.stock.push(c);
        })
        return true;
    }

    select(card: Card): Card[] {
        if (this.stock.length > 0){
            return [this.stock[this.stock.length - 1]];
        }
        else
            throw new Error("stack empty");
    }

    // no implementation for this event yet
    highlight(card: Card, isHighlighted: boolean) {
        if(card && isHighlighted) {}
        else {}
    }

    private shuffle() {
        let card: Card;
        let rand: number;

        for(let i = 0; i < this.stock.length; i++) {
            rand = this.randomInt(0, 51);
            card = this.stock[i];
            this.stock[i] = this.stock[rand];
            this.stock[rand] = card;
        }
    }

    private randomInt(min: number, max: number){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}