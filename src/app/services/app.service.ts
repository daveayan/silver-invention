import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

import { Teacher } from '../model/Teacher';
import { Student } from '../model/Student';
import { Class } from '../model/Class';

@Injectable()
export class AppService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private teachersApi = 'api/teachers';
  private studentsApi = 'api/students';
  private classesApi = 'api/classes';

  constructor(private http: Http) { }

  addNewTeacher(newTeacher: Teacher) {
    return this.http
      .post(this.teachersApi, JSON.stringify(newTeacher), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  getTeachers() {
    return this.http.get(this.teachersApi)
      .toPromise()
      .then(response => response.json().data as Teacher[])
      .catch(this.handleError);
  }

  removeTeacher(teacherIdToRemove: UUID) {
    let resp = this.http
      .delete(this.teachersApi + '/' + teacherIdToRemove, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

    console.log('Removed Teacher: ' + resp);

    return resp;
  }

  addNewStudent(newStudent: Student) {
    return this.http
      .post(this.studentsApi, JSON.stringify(newStudent), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  getStudents() {
    return this.http.get(this.studentsApi)
      .toPromise()
      .then(response => response.json().data as Student[])
      .catch(this.handleError);
  }

  removeStudent(studentIdToRemove: UUID) {
    let resp = this.http
      .delete(this.studentsApi + '/' + studentIdToRemove, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

    console.log('Removed Student: ' + resp);

    return resp;
  }

  addNewClass(newClass: Class) {
    return this.http
      .post(this.classesApi, JSON.stringify(newClass), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  getClasses() {
    return this.http.get(this.classesApi)
      .toPromise()
      .then(response => response.json().data as Class[])
      .catch(this.handleError);
  }

  removeClass(classIdToRemove: UUID) {
    let resp = this.http
      .delete(this.classesApi + '/' + classIdToRemove, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

    console.log('Removed Class: ' + resp);

    return resp;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
