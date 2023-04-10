import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/Student';
  
@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})

 export class TicketFormComponent implements OnInit {
 
  public ticketForm: FormGroup;
  public STUDENTS_LIST: Student[] = [];


  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
     this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      studentID: [''],
      major: ["false"],
      archived: false,
      id: this.STUDENTS_LIST.length > 0 ? this.STUDENTS_LIST[0].id : ['']

    });
 
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation 
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.STUDENTS_LIST = students;
    });
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    const studentId = this.ticketForm.value.studentId;
    ticketToCreate.student = this.STUDENTS_LIST.find((student) => student.id === studentId);
    this.ticketService.addTicket(ticketToCreate);
  }

}
