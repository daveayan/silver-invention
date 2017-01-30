import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppRouter } from './app.router';
import { AppComponent } from './app.component';
import { TeacherDashboardComponent } from './pages/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { ClassDashboardComponent } from './pages/class-dashboard/class-dashboard.component';
import { NewTeacherComponent } from './components/teacher/new-teacher/new-teacher.component';
import { ListTeachersComponent } from './components/teacher/list-teachers/list-teachers.component';
import { NewStudentComponent } from './components/student/new-student/new-student.component';
import { ListStudentsComponent } from './components/student/list-students/list-students.component';
import { NewClassComponent } from './components/class/new-class/new-class.component';
import { ListClassesComponent } from './components/class/list-classes/list-classes.component';
import { AppService } from './services/app.service';
import { ComponentCommunicationService } from './services/component-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ClassDashboardComponent,
    NewTeacherComponent,
    ListTeachersComponent,
    NewStudentComponent,
    ListStudentsComponent,
    NewClassComponent,
    ListClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    AppRouter
  ],
  providers: [
    AppService,
    ComponentCommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
