import { UUID } from 'angular2-uuid';

import { Teacher } from '../model/Teacher';
import { Student } from '../model/Student';
import { Class } from '../model/Class';

export class StorageService {
    async addNewTeacher(newTeacher: Teacher) {
        console.log('StorageService:addNewTeacher');
        return '';
    }

    async getTeachers() {
        console.log('StorageService:getTeachers');
        return [] as Teacher[];
    }

    async removeTeacher(teacherIdToRemove: UUID) {
        console.log('StorageService:removeTeacher: ' + teacherIdToRemove);
        return true;
    }

    async addNewStudent(newStudent: Student) {
        console.log('StorageService:addNewStudent');
        return '';
    }

    async getStudents() {
        console.log('StorageService:getStudents');
        return [] as Student[];
    }

    async removeStudent(studentIdToRemove: UUID) {
        console.log('StorageService:removeStudent: ' + studentIdToRemove);
        return true;
    }

    async addNewClass(newClass: Class) {
        console.log('StorageService:addNewClass');
        return '';
    }

    async getClasses() {
        console.log('StorageService:getClasses');
        return [] as Class[];
    }

    async removeClass(classIdToRemove: UUID) {
        console.log('StorageService:removeClass: ' + classIdToRemove);
        return true;
    }
}
