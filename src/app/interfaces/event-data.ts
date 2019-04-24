import { Card, Suits, Ranks } from '../types/card';
import { IStockable } from './stock-piles'

export interface IClickedStockPile {

    card: Card;
    stockPile: IStockable;
}