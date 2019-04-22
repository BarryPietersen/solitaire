import { Card, Suits, Ranks } from './card'

export class Deck {
    public stock: Card[];

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
    }

    constructor(shuffle: boolean) {
        this.initializeCards();
        if(shuffle) this.shuffle();
    }

    private initializeCards(): void {
        this.stock = [];
        
        for(let s = 0; s < 4; s++) {
            for(let r = 0; r < 13; r++) {
                this.stock.push(new Card(s, r));
            }
        }
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