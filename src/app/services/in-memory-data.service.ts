import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService {

  createDb() {
    let teachers = [
      { id: UUID.UUID(), name: 'Charles Xavier', joinDate: '01/01/2009' },
      { id: UUID.UUID(), name: 'Peter Parker', joinDate: '02/02/2010' }
    ];
    let students = [
      { id: UUID.UUID(), name: 'Magneta', gradeLevel: '1' },
      { id: UUID.UUID(), name: 'Tornado', gradeLevel: 'K' }
    ];
    let classes = [
      { id: UUID.UUID(), name: 'Monday Class', startDate: '08/01/2016' },
      { id: UUID.UUID(), name: 'Wednesday Class', startDate: '08/03/2016' }
    ];
    return { teachers, students, classes };

  }
}
