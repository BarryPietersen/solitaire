import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from '../card/card.component';
import { DeckComponent } from './deck.component';
import { EventEmitter } from '@angular/core';
import { Card } from 'src/app/types/card';
import { Deck } from 'src/app/types/deck';

describe('DeckComponent', () => {
  let component: DeckComponent;
  let fixture: ComponentFixture<DeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckComponent);
    component = fixture.componentInstance;
    component.deck = new Deck(true);
    // component.componentCardClicked = new EventEmitter<Card>();
    // component.componentBaseClicked = new EventEmitter<Card>();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
