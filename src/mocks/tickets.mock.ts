import { Ticket } from '../models/ticket';
import { majortype } from '../models/ticket';
 const dateToday: Date = new Date();

import { STUDENTS_MOCKED } from './student.mock';
 
export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Ticket 1',
    description: 'Description 1',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: majortype.GE,
    archived: false,
  },
  {
    title: 'Ticket 2',
    description: 'Description 2',
    date: dateToday,
    student:STUDENTS_MOCKED[1],
    major: majortype.CS,
    archived: false,
  },

];
 