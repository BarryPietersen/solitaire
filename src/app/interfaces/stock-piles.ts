import { Card, Suits, Ranks } from '../types/card';
import { Tableau } from 'src/app/types/tableau';
import { Foundation } from 'src/app/types/foundation';

export interface IStockable{
    push(card: Card[]);
    pop(card: Card);
}