export class Card {
    
    public rank: Ranks;
    public suit: Suits;
    public isUpSided: boolean;

    constructor(suit: Suits, rank: Ranks) {
        this.suit = suit;
        this.rank = rank;
        this.isUpSided = false;
    }

    public flip(){
        this.isUpSided = !this.isUpSided;
    }

    public toString(){
        return `${Ranks[this.rank]} ${Suits[this.suit]} isUpSided: ${this.isUpSided}`;
    }
}

export enum Suits {
    CLUBS,
    SPADES,
    HEARTS,
    DIAMONDS
}

export enum Ranks {
    ACE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING
}