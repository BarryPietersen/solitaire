import { Card, Suits, Ranks } from '../types/card';

export interface IStockable{

    stock: Card[];
    push(cards: Card[]): boolean;
    pop(card: Card);
    select(card: Card): Card[];
}