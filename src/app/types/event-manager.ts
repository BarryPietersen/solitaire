import { Card, Suits, Ranks } from './card';
import { TableTop } from 'src/app/types/table-top';
import { IStockable } from '../interfaces/stock-piles'
import { IClickedStockPile } from '../interfaces/event-data'

export class EventManager {

    public tableTop: TableTop;
    public selectedCard: Card;
    public selectedStockPile: IStockable;

    constructor(tableTop: TableTop) {
        this.tableTop = tableTop;
        this.selectedCard = null;
        this.selectedStockPile = null;
    }

    public deckClicked() {
        this.deSelect();
        //alert('deck clicked');

        if(this.tableTop.deck.stock.length > 0){
            let card = this.tableTop.deck.stock.pop();
            this.tableTop.selection.push([card]);
        }
        else if(this.tableTop.selection.stock.length > 0){
            let newStock = this.tableTop.selection.stock;
            this.tableTop.selection.stock = [];
            newStock.forEach(c => c.isUpSided = false);
            this.tableTop.deck.stock = newStock.reverse();
        }
        else{
            // all cards from the deck and
            // selection have been played.
            // there is nothing to do here
        }
    }

    public cardClicked(clickedData: IClickedStockPile) {

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

    private makeMove(stockPile: IStockable) {
        let cards = this.selectedStockPile.select(this.selectedCard);

        if(stockPile.push(cards)){
            //alert('pushed');
            this.selectedStockPile.pop(this.selectedCard);
            this.deSelect();
        }
        else{
            this.deSelect();
        }
    }

    private select(card: Card, stockPile: IStockable) {
        this.selectedCard = card;
        this.selectedStockPile = stockPile;
        // alert("selected" + Suits[card.suit] + " " + Ranks[card.rank]);
    }

    private deSelect() {
        this.selectedCard = null;
        this.selectedStockPile = null;
    }
}