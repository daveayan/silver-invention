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

  ngOnInit() {
    this.appService
        .getClasses()
        .then(classes => this.allClasses = classes);
  }

  remove(classToRemove) {
    this.appService
      .removeClass(classToRemove.id)
      .then(() => {
          this.allClasses = this.allClasses.filter(t => t !== classToRemove);
        });
  }

}
