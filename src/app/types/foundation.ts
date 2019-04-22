import { Card, Suits, Ranks } from './card'

export class Foundation {
    public suit: Suits;
    public stock: Card[];

    constructor(suit: Suits) {
        this.suit = suit;
        this.stock = [];
    }

    public push(card: Card) {
        if (this.validatePush(card))
        {
            this.stock.push(card);
            card.isUpSided = true;
            if (card.rank == Ranks.KING) { /* foundation complete event */ }
        }
        else
            throw new Error('invalid card operation')
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