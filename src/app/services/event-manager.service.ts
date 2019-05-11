import { Injectable } from '@angular/core';
import { EventManager } from 'src/app/types/event-manager';
import { TableTop } from 'src/app/types/table-top';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {
  constructor() { }

  public getEventManager(tableTop: TableTop) {
    return new EventManager(tableTop);
  }
}
