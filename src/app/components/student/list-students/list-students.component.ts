import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { Student } from '../../../model/Student';
import { AppService } from '../../../services/app.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  subscription: Subscription;
  allStudents: Student[];

  constructor(private appService: AppService, private componentCommunicationService: ComponentCommunicationService) {
    this.subscription = componentCommunicationService.studentAdded$.subscribe(
      newStudent => {
        this.allStudents.push(newStudent);
    });
  }

  ngOnInit() {
    this.appService
        .getStudents()
        .then(students => this.allStudents = students);
  }

  remove(studentToRemove) {
    this.appService
      .removeStudent(studentToRemove.id)
      .then(() => {
          this.allStudents = this.allStudents.filter(t => t !== studentToRemove);
        });
  }

}
