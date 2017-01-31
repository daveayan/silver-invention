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

  async ngOnInit() {
    this.allStudents = await this.appService.getStudents();
  }

  async remove(studentToRemove) {
    await this.appService.removeStudent(studentToRemove.id);
    this.allStudents = this.allStudents.filter(t => t !== studentToRemove);
  }
}
