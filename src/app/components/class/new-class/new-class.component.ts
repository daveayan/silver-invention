import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Class } from '../../../model/Class';
import { AppService } from '../../../services/app.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  private newClass: Class;

  constructor(private appService: AppService,
    private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit() {
    this.newClass = new Class();
  }

  addNewClass() {
    let c = new Class();
    c.id = UUID.UUID();
    c.name = this.newClass.name;
    c.startDate = this.newClass.startDate;
    this.appService.addNewClass(c).then(res => this.componentCommunicationService.newClass(c));
  }

}
