import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';

import { AppRouter } from './app.router';
import { AppComponent } from './app.component';
import { TeacherDashboardComponent } from './pages/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { ClassDashboardComponent } from './pages/class-dashboard/class-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NewTeacherComponent } from './components/teacher/new-teacher/new-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ClassDashboardComponent,
    LoginComponent,
    NewTeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
