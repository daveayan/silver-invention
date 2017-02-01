import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Class } from '../../../model/Class';
import { StorageService } from '../../../services/storage.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  private newClass: Class;

  constructor(private storageService: StorageService,
    private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit() {
    this.newClass = new Class();
  }

  async addNewClass() {
    let c = new Class();
    c.id = UUID.UUID();
    c.name = this.newClass.name;
    c.startDate = this.newClass.startDate;

    await this.storageService.addNewClass(c);
    this.componentCommunicationService.newClass(c);
  }

}
