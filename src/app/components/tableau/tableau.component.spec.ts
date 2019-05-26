import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauComponent } from './tableau.component';
import { CardComponent } from '../card/card.component';
import { Tableau } from 'src/app/types/tableau';
import { Card } from 'src/app/types/card';
import { IClickedStockPile } from 'src/app/interfaces/event-data';

describe('TableauComponent', () => {
  let cards: Card[];
  let component: TableauComponent;
  let fixture: ComponentFixture<TableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    cards = tableauCards();
    fixture = TestBed.createComponent(TableauComponent);
    component = fixture.componentInstance;

    component.tableau = new Tableau();
    component.tableau.stock.push(...cards);
    component.componentBaseClicked.subscribe(mockHandler);
    component.componentCardClicked.subscribe(mockHandler);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call notify correctly (clicked)', () => {
    spyOn(component, 'notify');
    let clickedCard = cards[cards.length - 1];
    component.cardClicked(clickedCard);
    expect(component.notify).toHaveBeenCalledWith(clickedCard, false);
  });

  it('should call notify correctly (dblClicked)', () => {
    spyOn(component, 'notify');
    let clickedCard = cards[cards.length - 1];
    component.cardDblClicked(clickedCard);
    expect(component.notify).toHaveBeenCalledWith(clickedCard, true);
  });

  it('should emit correct IClickedStockPile data from componentCardClicked (dblClicked)', () => {
    spyOn(component.componentCardClicked, 'emit');
    let clickedCard = cards[cards.length - 1];
    component.cardDblClicked(clickedCard);

    let clickedData: IClickedStockPile = {
      card: clickedCard,
      stockPile: component.tableau,
      wasDblClicked: true
    }

    expect(component.componentCardClicked.emit).toHaveBeenCalledWith(clickedData);
  });
});

let mockHandler = ($event) => {

}

let tableauCards = (): Card[] => {
  let lastCard = new Card(2,2);
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
