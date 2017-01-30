import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { Teacher } from '../model/Teacher';
import { Student } from '../model/Student';
import { Class } from '../model/Class';

@Injectable()
export class ComponentCommunicationService {

  private teacherAddedSource = new Subject<Teacher>();
  private studentAddedSource = new Subject<Student>();
  private classAddedSource = new Subject<Class>();

  teacherAdded$ = this.teacherAddedSource.asObservable();
  studentAdded$ = this.studentAddedSource.asObservable();
  classAdded$ = this.classAddedSource.asObservable();

  constructor() { }

  newTeacherAdded(newTeacher: Teacher) {
    this.teacherAddedSource.next(newTeacher);
  }

  newStudent(newStudent: Student) {
    this.studentAddedSource.next(newStudent);
  }

  newClass(newClass: Class) {
    this.classAddedSource.next(newClass);
  }
}
