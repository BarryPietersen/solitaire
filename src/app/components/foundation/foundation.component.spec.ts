import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationComponent } from './foundation.component';
import { CardComponent } from '../card/card.component';
import { Foundation } from 'src/app/types/foundation';
import { Card } from 'src/app/types/card';
import { IClickedStockPile } from 'src/app/interfaces/event-data';

describe('FoundationComponent', () => {
  let cards: Card[];
  let component: FoundationComponent;
  let fixture: ComponentFixture<FoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    cards = foundationCards();
    fixture = TestBed.createComponent(FoundationComponent);
    component = fixture.componentInstance;
    component.foundation = new Foundation(1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit componentBaseClicked correctly (clicked)', () => {
    spyOn(component.componentBaseClicked, 'emit');
    component.baseClicked();
    expect(component.componentBaseClicked.emit).toHaveBeenCalledWith(component.foundation);
  });

  it('should emit correct IClickedStockPile data from componentCardClicked (clicked)', () => {
    component.foundation.stock.push(...cards);
    spyOn(component.componentCardClicked, 'emit');
    let clickedCard = cards[cards.length - 1];
    component.cardClicked(clickedCard);

    let clickedData: IClickedStockPile = {
      card: clickedCard,
      stockPile: component.foundation,
      wasDblClicked: false
    }

    expect(component.componentCardClicked.emit).toHaveBeenCalledWith(clickedData);
  });
});


let mockHandler = ($event) => {
}

let foundationCards = (): Card[] => {
  let cards = [
    new Card(1,0),
    new Card(1,1),
    new Card(1,2),
    new Card(1,3),
    new Card(1,4),
    new Card(1,5),
    new Card(1,6)
  ]

  cards.forEach(c => c.flip())

  return cards;
}
