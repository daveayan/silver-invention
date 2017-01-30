import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Student } from '../../../model/Student';
import { AppService } from '../../../services/app.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  private newStudent: Student;

  constructor(private appService: AppService,
    private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit() {
    this.newStudent = new Student();
  }

  addNewStudent() {
    let s = new Student();
    s.id = UUID.UUID();
    s.name = this.newStudent.name;
    s.gradeLevel = this.newStudent.gradeLevel;
    this.appService.addNewStudent(s).then(res => this.componentCommunicationService.newStudent(s));
  }

}
