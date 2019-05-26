import { Card, Suits, Ranks } from './card'
import { Tableau } from './tableau';

describe('Tableau Class', () => {
    let cards: Card[];
    let tableau: Tableau;

    beforeEach(() => {
        cards = [];
        tableau = new Tableau();
        tableau.highlightGUI = mockHandler;
    })

    it('should be instantiated', () => {
        expect(tableau).toBeTruthy();
    })

    it('should push valid cards onto its stock pile', () => {
        cards = dealtTableauCards();
        tableau.stock.push(...cards);
        let peek = cards[cards.length - 1];
        let validCards: Card[] = properlyArrangedTableauCards(peek);

        expect(tableau.push([...validCards])).toBe(true);
    })

    it('should reject invalid cards from its stock pile', () => {
        cards = dealtTableauCards();
        tableau.stock.push(...cards);
        let peek = cards.pop();
        let invalidCards: Card[] = [];

        for(let r = peek.rank - 1; r >= 0; r--)
            invalidCards.push(new Card((peek.suit + r) % 3, r));

        expect(tableau.push([...invalidCards])).toBe(false);
    })

    it('should select a range of cards from its stock pile', () => {
        let i = 3;
        let selectedCards: Card[];
        let head = new Card(1, 9);
        head.flip();
        cards = properlyArrangedTableauCards(head);
        tableau.stock.push(head, ...cards);
        selectedCards = tableau.select(cards[i]);

        i = tableau.stock.findIndex(c => c === selectedCards[0]);

        for(let j = 0; i < tableau.stock.length; i++, j++) {
            expect(tableau.stock[i] === selectedCards[j] &&
                selectedCards[j].isUpSided).toBe(true);
        }
    })
});

let dealtTableauCards = (): Card[] => {
    let lastCard = new Card(2,7);
    lastCard.flip();

    return [
        new Card(1,2),
        new Card(3,2),
        new Card(1,1),
        new Card(1,12),
        new Card(1,6),
        new Card(3,4),
        new Card(2,9),
        lastCard
    ]
}

let properlyArrangedTableauCards = (from: Card): Card[] => {
    let cards: Card[] = [];
    let nextSuit = getDifferentColor(from.suit);

    for(let r = from.rank - 1; r >= 0; r--) {
        let card = new Card(nextSuit, r);
        card.flip();
        cards.push(card);
        nextSuit = getDifferentColor(nextSuit);
    }

    return cards;
}

let getDifferentColor = (suit: Suits): Suits => {
    return (suit === Suits.CLUBS ||
            suit === Suits.SPADES) ? Suits.HEARTS : Suits.CLUBS;
    }

let mockHandler = ($event) => {}