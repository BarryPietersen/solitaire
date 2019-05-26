import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TableTopComponent } from './components/table-top/table-top.component';
import { CardComponent } from './components/card/card.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { SelectionComponent } from './components/selection/selection.component';
import { DeckComponent } from './components/deck/deck.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent,
        TableTopComponent,
        TableauComponent,
        FoundationComponent,
        SelectionComponent,
        DeckComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'solitaire'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('solitaire');
  });
});
