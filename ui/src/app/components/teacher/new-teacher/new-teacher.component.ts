import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../model/Teacher';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {

  private newTeacher: Teacher;

  constructor() { }

  ngOnInit() {
    this.newTeacher = new Teacher();
  }

}
