import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { Student } from '../../../model/Student';
import { StorageService } from '../../../services/storage.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  subscription: Subscription;
  allStudents: Student[];

  constructor(private storageService: StorageService, private componentCommunicationService: ComponentCommunicationService) {
    this.subscription = componentCommunicationService.studentAdded$.subscribe(
      newStudent => {
        this.allStudents.push(newStudent);
    });
  }

  async ngOnInit() {
    this.allStudents = await this.storageService.getStudents();
  }

  async remove(studentToRemove) {
    await this.storageService.removeStudent(studentToRemove.id);
    this.allStudents = this.allStudents.filter(t => t !== studentToRemove);
  }
}
