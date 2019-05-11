import { Card, Suits, Ranks } from './card'
import { Foundation } from './foundation'
import { Tableau } from './tableau'
import { Deck } from './deck'
import { Selection } from './selection';

export class TableTop {
    public deck: Deck;
    public selection: Selection;
    public tableaus: Tableau[];
    public foundations: Foundation[];

    public constructor(_deck: Deck) {
        this.deck = _deck;
        this.selection = new Selection();
        this.tableaus = [];
        this.foundations = [];

        for(let i = 0; i < 7; i++) {
            this.tableaus.push(new Tableau());
        }
        
        this.foundations.push(new Foundation(Suits.SPADES));  
        this.foundations.push(new Foundation(Suits.HEARTS));    
        this.foundations.push(new Foundation(Suits.CLUBS));    
        this.foundations.push(new Foundation(Suits.DIAMONDS));

        this.deal();
    }

    private deal() {
        for(let i = 0; i < 7; i++) {
            for(let j = i; j < 7; j++) {
                this.tableaus[j].stock.push(this.deck.stock.pop());
            }
        }

        this.tableaus.forEach(t => t.stock[t.stock.length - 1].isUpSided = true);
        this.selection.push([this.deck.stock.pop()]);
    }
}