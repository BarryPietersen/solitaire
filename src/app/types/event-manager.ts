import { Card, Suits, Ranks } from './card';
import { TableTop } from 'src/app/types/table-top';
import { IStockable } from '../interfaces/stock-piles'
import { IClickedStockPile } from '../interfaces/event-data'
import { Tableau } from './tableau';
import { Foundation } from './foundation';

export class EventManager {

    public tableTop: TableTop;
    public selectedCard: Card;
    public selectedStockPile: IStockable;

    constructor(tableTop: TableTop) {
        this.tableTop = tableTop;
        this.selectedCard = null;
        this.selectedStockPile = null;
    }

    public deckClicked(card?: Card) {
        this.deSelect();
        console.log('deck clicked');

        if(this.tableTop.deck.stock.length > 0) {
            let card = this.tableTop.deck.stock.pop();
            this.tableTop.selection.push([card]);
        }
        else if(this.tableTop.selection.stock.length > 0) {
            let newDeckStock = this.tableTop.selection.stock;
            this.tableTop.selection.stock = [];
            newDeckStock.forEach(c => c.isUpSided = false);
            this.tableTop.deck.stock = newDeckStock.reverse();
        }
        else {
            // all cards from the deck and
            // selection have been played.
            // there is nothing to do here
        }
    }

    foundationBaseClicked(foundation: Foundation) {
        if(this.selectedCard !== null && this. selectedStockPile !== null) {
            this.makeMove(foundation);
        }
    }

    tableauBaseClicked(tableau: Tableau) {
        if(this.selectedCard !== null && this. selectedStockPile !== null) {
            this.makeMove(tableau);
        }
    }

    public cardClicked(clickedData: IClickedStockPile) {

        if(clickedData && clickedData.card && clickedData.stockPile) {
            if(this.selectedCard !== null && this. selectedStockPile !== null) {
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
        //console.log(this.selectedStockPile.select);
        let cards = this.selectedStockPile.select(this.selectedCard);

        if(stockPile.push(cards)) {
            this.selectedStockPile.pop(this.selectedCard);
            // console.log(this.selectedStockPile.select);
            this.deSelect();
        }
        else {
            this.deSelect();
        }
    }

    private select(card: Card, stockPile: IStockable) {
        this.selectedCard = card;
        this.selectedStockPile = stockPile;
    }

    private deSelect() {
        this.selectedCard = null;
        this.selectedStockPile = null;
    }
}