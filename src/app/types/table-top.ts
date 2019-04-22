import { Card, Suits, Ranks } from './card'
import { Foundation } from './foundation'
import { Tableau } from './tableau'
import { Deck } from './deck'

export class TableTop {
    private deck: Deck;
    public stock: Card[];
    public visible: Card[];
    public tableaus: Tableau[];
    public foundations: Foundation[];

    public constructor() {
        this.deck = new Deck(true);
        this.stock = this.deck.stock;
        this.visible = [];
        this.tableaus = [];
        this.foundations = [];

        for(let i = 0; i < 7; i++){
            this.tableaus.push(new Tableau());
        }
        
        this.foundations.push(new Foundation(Suits.CLUBS));
        this.foundations.push(new Foundation(Suits.SPADES));
        this.foundations.push(new Foundation(Suits.HEARTS));
        this.foundations.push(new Foundation(Suits.DIAMONDS));

        this.deal();
    }

    private deal() {
        for(let i = 0; i < 7; i++) {
            for(let j = i; j < 7; j++) {
                this.tableaus[j].stock.push(this.stock.pop())
            }
        }

        this.tableaus.forEach(t => t.stock[t.stock.length - 1].isUpSided = true)
        this.visible.push(this.stock.pop())
        this.visible[0].isUpSided = true;
    }
}