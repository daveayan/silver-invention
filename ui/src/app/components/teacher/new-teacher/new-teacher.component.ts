import { Component, OnInit } from '@angular/core';

import { Teacher } from '../../../model/Teacher';
import { AppService } from '../../../services/app.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {

  private newTeacher: Teacher;

  constructor(private appService: AppService,
    private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit() {
    this.newTeacher = new Teacher();
  }

  addNewTeacher() {
    let t = new Teacher();
    t.name = this.newTeacher.name;
    t.joindate = this.newTeacher.joindate;
    this.appService.addNewTeacher(t).then(res => this.componentCommunicationService.newTeacherAdded(t));
  }

}
