import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  ticketHasBeenDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  
 
  @Output() notifyArchiveStateChanged = new EventEmitter();
    constructor() {
  }

  ngOnInit() {
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }
   
  //- Créez une fonction deleteTicket() qui va émettre le ticket courant
  deleteTicket() {
    this.ticketHasBeenDeleted.emit(true);
  }
  changeArchiveStateTicket() {
    this.ticket.archived = !this.ticket.archived
    //this.notifyArchiveStateChanged.emit();
  }
 
  
}
