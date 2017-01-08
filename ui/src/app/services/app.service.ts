import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Teacher } from '../model/Teacher';

@Injectable()
export class AppService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private teachersApi = 'api/teachers';
  private studentsApi = 'api/students';

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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
