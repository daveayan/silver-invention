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

  async addNewTeacher(newTeacher: Teacher) {
    const response = await this.http
      .post(this.teachersApi, JSON.stringify(newTeacher), {headers: this.headers})
      .toPromise();
    return response.json().data;
  }

  async getTeachers() {
    const response = await this.http.get(this.teachersApi).toPromise();
    return response.json().data as Teacher[];
  }

  async removeTeacher(teacherIdToRemove: UUID) {
    const response = await this.http
      .delete(this.teachersApi + '/' + teacherIdToRemove, {headers: this.headers})
      .toPromise();

    console.log('Removed Teacher: ' + response);
    return true;
  }

  async addNewStudent(newStudent: Student) {
    const response = await this.http
      .post(this.studentsApi, JSON.stringify(newStudent), {headers: this.headers})
      .toPromise();
    return response.json().data;
  }

  async getStudents() {
    const response = await this.http.get(this.studentsApi).toPromise();
    return response.json().data as Student[];
  }

  async removeStudent(studentIdToRemove: UUID) {
    const response = await this.http
      .delete(this.studentsApi + '/' + studentIdToRemove, {headers: this.headers})
      .toPromise();

    console.log('Removed Student: ' + response);
    return true;
  }

  async addNewClass(newClass: Class) {
    const response = await this.http
      .post(this.classesApi, JSON.stringify(newClass), {headers: this.headers})
      .toPromise();
    return response.json().data;
  }

  async getClasses() {
    const response = await this.http.get(this.classesApi).toPromise();
    return response.json().data as Class[];
  }

  async removeClass(classIdToRemove: UUID) {
    const response = await this.http
      .delete(this.classesApi + '/' + classIdToRemove, {headers: this.headers})
      .toPromise();

    console.log('Removed Class: ' + response);
    return true;
  }
}
