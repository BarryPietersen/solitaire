import { Component, OnInit, Input } from '@angular/core';

import { TableTop } from 'src/app/types/table-top';

@Component({
  selector: 'app-table-top',
  templateUrl: './table-top.component.html',
  styleUrls: ['./table-top.component.css']
})
export class TableTopComponent implements OnInit {
  public tableTop: TableTop;
  constructor() {
   }

  ngOnInit() {
    this.tableTop = new TableTop();
  }
}
