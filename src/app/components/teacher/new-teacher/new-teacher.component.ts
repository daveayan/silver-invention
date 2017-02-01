import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Teacher } from '../../../model/Teacher';
import { AppService } from '../../../services/app.service';
import { StorageService } from '../../../services/storage.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {

  private newTeacher: Teacher;

  constructor(private storageService: StorageService,
    private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit() {
    this.newTeacher = new Teacher();
  }

  async addNewTeacher() {
    let t = new Teacher();
    t.id = UUID.UUID();
    t.name = this.newTeacher.name;
    t.joinDate = this.newTeacher.joinDate;

    await this.storageService.addNewTeacher(t);
    this.componentCommunicationService.newTeacherAdded(t);
  }

}
