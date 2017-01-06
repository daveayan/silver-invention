import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../model/Teacher';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {

  private newTeacher: Teacher;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.newTeacher = new Teacher();
  }

  addNewTeacher() {
    this.appService.addNewTeacher();
  }

}
