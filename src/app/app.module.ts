import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TableTopComponent } from './components/table-top/table-top.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { StockPileComponent } from './components/stock-pile/stock-pile.component';
import { SelectionComponent } from './components/selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableTopComponent,
    TableauComponent,
    FoundationComponent,
    StockPileComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
