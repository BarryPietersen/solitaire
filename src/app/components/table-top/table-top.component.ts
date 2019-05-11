import { Component, OnInit, Input } from '@angular/core';
import { TableTop } from 'src/app/types/table-top';
import { EventManager } from 'src/app/types/event-manager';
import { TableTopService } from 'src/app/services/table-top.service';
import { EventManagerService } from 'src/app/services/event-manager.service';

@Component({
  selector: 'app-table-top',
  templateUrl: './table-top.component.html',
  styleUrls: ['./table-top.component.css']
})
export class TableTopComponent implements OnInit {
  public tableTop: TableTop;
  public eventManager: EventManager;

  constructor(tableTopSvc: TableTopService, eventManagerSvc: EventManagerService) {
    this.tableTop = tableTopSvc.getTableTop();
    this.eventManager = eventManagerSvc.getEventManager(this.tableTop);
  }

  ngOnInit() { }
}
