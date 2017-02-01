import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Student } from '../../../model/Student';
import { StorageService } from '../../../services/storage.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  private newStudent: Student;

  constructor(private storageService: StorageService,
    private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit() {
    this.newStudent = new Student();
  }

  async addNewStudent() {
    let s = new Student();
    s.id = UUID.UUID();
    s.name = this.newStudent.name;
    s.gradeLevel = this.newStudent.gradeLevel;

    await this.storageService.addNewStudent(s);
    this.componentCommunicationService.newStudent(s);
  }

}
