import { Card, Suits, Ranks } from './card';
import { TableTop } from 'src/app/types/table-top';
import { IStockable } from '../interfaces/stock-piles'
import { IClickedStockPile } from '../interfaces/event-data'

export class GameManager {

    public tableTop: TableTop;
    public selectedCard: Card;
    public selectedStockPile: IStockable;

    constructor(tableTop: TableTop){
        this.tableTop = tableTop;
    }

    public cardClicked(clickedData: IClickedStockPile){
        if(clickedData && clickedData.card && clickedData.stockPile){
            if(this.selectedCard !== null && this. selectedStockPile !== null){
                this.makeMove(clickedData.card, clickedData.stockPile);
            }
            else{
                this.select(clickedData.card, clickedData.stockPile);
            }
        }
        else
            throw new Error('poorly structured event data');
    }

    private makeMove(card: Card, stockPile: IStockable){
        if(this.selectedStockPile.push(stockPile.select(card))){
            stockPile.pop(card);
            this.selectedCard = null;
            this.selectedStockPile = null;
        }
    }

    private select(card: Card, stockPile: IStockable){
        this.selectedCard = card;
        this.selectedStockPile = stockPile;
    }
}