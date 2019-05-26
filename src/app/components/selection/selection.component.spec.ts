import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionComponent } from './selection.component';
import { CardComponent } from '../card/card.component';
import { Selection } from 'src/app/types/selection';
import { Card } from 'src/app/types/card';
import { IClickedStockPile } from 'src/app/interfaces/event-data';

describe('SelectionComponent', () => {
  let cards: Card[];
  let component: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    cards = selectionCards();
    fixture = TestBed.createComponent(SelectionComponent);
    component = fixture.componentInstance;

    component.selection = new Selection();
    component.selection.stock.push(...cards);
    component.componentCardClicked.subscribe(mockHandler);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call notify correctly (clicked)', () => {
    spyOn(component, 'notify');
    let clickedCard = cards[cards.length - 1];
    component.selectionClicked(clickedCard);
    expect(component.notify).toHaveBeenCalledWith(clickedCard, false);
  });

  it('should call notify correctly (dblClicked)', () => {
    spyOn(component, 'notify');
    let clickedCard = cards[cards.length - 1];
    component.selectionDblClicked(clickedCard);
    expect(component.notify).toHaveBeenCalledWith(clickedCard, true);
  });

  it('should emit correct IClickedStockPile data from componentCardClicked (dblClicked)', () => {
    spyOn(component.componentCardClicked, 'emit');
    let clickedCard = cards[cards.length - 1];
    component.selectionDblClicked(clickedCard);

    let clickedData: IClickedStockPile = {
      card: clickedCard,
      stockPile: component.selection,
      wasDblClicked: true
    }

    expect(component.componentCardClicked.emit).toHaveBeenCalledWith(clickedData);
  });
});

let mockHandler = ($event) => {
}

let selectionCards = (): Card[] => {
  let cards = [
    new Card(1,2),
    new Card(3,2),
    new Card(1,1),
    new Card(1,12),
    new Card(1,6),
    new Card(3,4),
    new Card(2,9)
  ]

  cards.forEach(c => c.flip())

  return cards;
}
