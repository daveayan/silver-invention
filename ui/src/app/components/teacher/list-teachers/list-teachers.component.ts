import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { Teacher } from '../../../model/Teacher';
import { AppService } from '../../../services/app.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {
  subscription: Subscription;
  allTeachers: Teacher[];

  constructor(private appService: AppService, private componentCommunicationService: ComponentCommunicationService) {
    this.subscription = componentCommunicationService.teacherAdded$.subscribe(
      newTeacher => {
        this.allTeachers.push(newTeacher);
    });
  }

  ngOnInit() {
    this.appService
        .getTeachers()
        .then(teachers => this.allTeachers = teachers);
  }

}
