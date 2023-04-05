import { Ticket } from '../models/ticket';
import { majortype } from '../models/ticket';
const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in rome',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 1,
    archived : false
    
  },
  {
    title: 'SI5 in marrakech',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: majortype.CS,
    archived : true
  },
];
 