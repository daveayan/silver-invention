import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { Class } from '../../../model/Class';
import { StorageService } from '../../../services/storage.service';
import { ComponentCommunicationService } from '../../../services/component-communication.service';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent implements OnInit {
  subscription: Subscription;
  allClasses: Class[];

  constructor(private storageService: StorageService, private componentCommunicationService: ComponentCommunicationService) {
    this.subscription = componentCommunicationService.classAdded$.subscribe(
      newClass => {
        this.allClasses.push(newClass);
    });
  }

  async ngOnInit() {
    this.allClasses = await this.storageService.getClasses();
  }

  async remove(classToRemove) {
    await this.storageService.removeClass(classToRemove.id);
    this.allClasses = this.allClasses.filter(t => t !== classToRemove);
  }
}
