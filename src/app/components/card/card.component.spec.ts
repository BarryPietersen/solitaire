import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Card } from 'src/app/types/card'
import { DebugElement, Component, OnInit, } from '@angular/core';

xdescribe('CardComponent', () => {
  let fixture: ComponentFixture<MockHostComponent>;
  let debugElement: DebugElement;
  let component: CardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, MockHostComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHostComponent);
    debugElement = fixture.debugElement;
    component = debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clicked after 225 milliseconds', fakeAsync(() => {
    spyOn(component.clicked, 'emit');

    component.onClick();
    tick(250);

    expect(component.clicked.emit).toHaveBeenCalled()
  }));

  it('should emit dblClicked and not emit clicked', () => {
    spyOn(component.clicked, 'emit');
    spyOn(component.dblClicked, 'emit');

    component.onClick();
    component.onDblClick();

    expect(component.clicked.emit).not.toHaveBeenCalled();
    expect(component.dblClicked.emit).toHaveBeenCalled();
  });
});

@Component({
  selector: 'mock-host-component',
  template: `<app-card
                [card]="card"
                (clicked)="cardClicked($event)"
                (dblClicked)="cardDblClicked($event)">
              </app-card>`
})
export class MockHostComponent implements OnInit { 
  private card: Card;

  constructor() {}

  ngOnInit() {
    this.card = new Card(1,2);
  }

  cardClicked(card: Card) {}

  cardDblClicked(card: Card) {}
}

