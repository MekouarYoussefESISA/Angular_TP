import { Student } from "./Student";

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: majortype;
  archived?: boolean;
 
}
export enum majortype {
 
  GE  = 1,
  CS  = 2,
  IT  = 3,
  GB  = 4,
}