import { Candidate } from './candidate.interface';

export interface Member extends Candidate {
  label?: string;
  birthdate?: Date;
}
