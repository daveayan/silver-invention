import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular2-in-memory-web-api';

@Injectable()
export class InMemoryDataService {

  createDb() {
    let teachers = [
      { name: 'Mr. Nice' },
      { name: 'Narco' }
    ];
    let students = [
      { name: 'Magneta' },
      { name: 'Tornado' }
    ];
    return { teachers, students };

  }
}
