import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { Class } from '../../../model/Class';
import { AppService } from '../../../services/app.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent implements OnInit {
  subscription: Subscription;
  allClasses: Class[];

  constructor(private appService: AppService, private componentCommunicationService: ComponentCommunicationService) {
    this.subscription = componentCommunicationService.classAdded$.subscribe(
      newClass => {
        this.allClasses.push(newClass);
    });
  }

  async ngOnInit() {
    this.allClasses = await this.appService.getClasses();
  }

  async remove(classToRemove) {
    await this.appService.removeClass(classToRemove.id);
    this.allClasses = this.allClasses.filter(t => t !== classToRemove);
  }
}
