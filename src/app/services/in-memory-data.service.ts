import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { InMemoryDbService } from 'angular2-in-memory-web-api';

@Injectable()
export class InMemoryDataService {

  createDb() {
    let teachers = [
      { id: UUID.UUID(), name: 'Charles Xavier' },
      { id: UUID.UUID(), name: 'Peter Parker' }
    ];
    let students = [
      { id: UUID.UUID(), name: 'Magneta' },
      { id: UUID.UUID(), name: 'Tornado' }
    ];
    return { teachers, students };

  }
}
