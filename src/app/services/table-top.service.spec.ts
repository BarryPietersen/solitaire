import { TestBed } from '@angular/core/testing';

import { TableTopService } from './table-top.service';

describe('TableTopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableTopService = TestBed.get(TableTopService);
    expect(service).toBeTruthy();
  });
});
