import { Component, OnInit, Input } from '@angular/core';

import { TableTop } from 'src/app/types/table-top';
import { GameManager } from 'src/app/types/game-manager';

@Component({
  selector: 'app-table-top',
  templateUrl: './table-top.component.html',
  styleUrls: ['./table-top.component.css']
})
export class TableTopComponent implements OnInit {
  
  public tableTop: TableTop;
  public gameManager: GameManager;

  constructor() {
   }

  ngOnInit() {
    this.tableTop = new TableTop();
    this.gameManager = new GameManager(this.tableTop);
  }
}
