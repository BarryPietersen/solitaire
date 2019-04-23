import { Card, Suits, Ranks } from './card';
import { TableTop } from 'src/app/types/table-top';
import { IStockable } from '../interfaces/stock-piles'
import { IClickedStockPile } from '../interfaces/event-data'

export class EventManager {

    public tableTop: TableTop;
    public selectedCard: Card;
    public selectedStockPile: IStockable;

    constructor(tableTop: TableTop){
        this.tableTop = tableTop;
        this.selectedCard = null;
        this.selectedStockPile = null;
    }

    public cardClicked(clickedData: IClickedStockPile){
        if(clickedData && clickedData.card && clickedData.stockPile){
            if(this.selectedCard !== null && this. selectedStockPile !== null){
                this.makeMove(clickedData.stockPile);
            }
            else{
                this.select(clickedData.card, clickedData.stockPile);
            }
        }
        else
            throw new Error('poorly structured event data');
    }

    private makeMove(stockPile: IStockable){
        let cards = this.selectedStockPile.select(this.selectedCard);
        console.log(cards);

        if(stockPile.push(cards)){
            // alert('pushed');
            this.selectedStockPile.pop(this.selectedCard);
            this.deSelect();
        }
        else{
            this.deSelect();
        }
    }

    private select(card: Card, stockPile: IStockable){
        this.selectedCard = card;
        this.selectedStockPile = stockPile;
        // alert("selected" + Suits[card.suit] + " " + Ranks[card.rank]);
    }

    private deSelect(){
        this.selectedCard = null;
        this.selectedStockPile = null;
    }
}