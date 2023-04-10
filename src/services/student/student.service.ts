import { Injectable } from '@angular/core';
import { Student } from '../../models/Student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
   
    private studentsUrl = 'api/students';

    constructor(private http: HttpClient) {}

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.studentsUrl);
    }
     
     
    
    }
   
    
  
 