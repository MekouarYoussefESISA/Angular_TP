import { Injectable } from '@angular/core';
import { Student } from '../../models/Student';
import { STUDENTS_MOCKED } from '../../mocks/student.mock';
import { BehaviorSubject } from 'rxjs/index';
@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
    /**
     * Services Documentation:
     * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
     */
    private studentList: Student[] = STUDENTS_MOCKED;
    /**
     * Observable which contains the list of the tickets.
     * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
     *  */
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
    constructor() {
    }
    addStudent(student: Student) {
        // You need here to update the list of ticket and then update our observable (Subject) with the new list
        // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
        // We add the ticket to the list
        this.studentList.push(student);
        //update observable with the new value
        this.students$.next(this.studentList);
    }
    deleteStudent(student: Student) {
        // We add the ticket to the list
        this.studentList.splice(this.studentList.indexOf(student), 1);
        //update observable with the new value
        this.students$.next(this.studentList);
    }
    }
 