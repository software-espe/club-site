import { role } from './common.interface';

export interface Candidate {
  id?: string;
  name: string;
  surname: string;
  email: string;
  socials: {
    linkedin?: string;
    whatsapp?: string;
    twitter?: string;
  };
  role?: role;
  career: string;
  semester?: number;
  experience: boolean;
  picture_url?: string;
}
