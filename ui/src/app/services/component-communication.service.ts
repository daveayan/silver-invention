import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { Teacher } from '../model/Teacher';

@Injectable()
export class ComponentCommunicationService {

  private teacherAddedSource = new Subject<Teacher>();
  teacherAdded$ = this.teacherAddedSource.asObservable();

  constructor() { }

  newTeacherAdded(newTeacher: Teacher) {
    this.teacherAddedSource.next(newTeacher);
  }

}
