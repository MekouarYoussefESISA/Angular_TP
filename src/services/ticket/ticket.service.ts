import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
 import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;
  private archivedTicketList: Ticket[] = TICKETS_MOCKED;
  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);
  public archivedTickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.archivedTicketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject

    // We add the ticket to the list
    this.ticketList.push(ticket);
    //update observable with the new value
    this.tickets$.next(this.ticketList);
  }

  deleteTicket(ticket: Ticket) {
    // We add the ticket to the list
    this.ticketList.splice(this.ticketList.indexOf(ticket), 1);
    //update observable with the new value
    this.tickets$.next(this.ticketList);
  }
 archiveTicket(ticket: Ticket) {
    // We add the ticket to the list
    this.archivedTicketList.push(ticket);
    this.deleteTicket(ticket);
    //update observable with the new value
    this.archivedTickets$.next(this.archivedTicketList);

  }
  displayArchivedTickets() {
     
  }
}
