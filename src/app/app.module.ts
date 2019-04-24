import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TableTopComponent } from './components/table-top/table-top.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { SelectionComponent } from './components/selection/selection.component';
import { DeckComponent } from './components/deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableTopComponent,
    TableauComponent,
    FoundationComponent,
    SelectionComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
