export type role = 'member' | 'vetus' | 'venator' | 'candidate';

export interface Member {
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
  label?: string;
  birthdate?: Date;
  career: string;
  semester?: number;
  experience: boolean;
  picture_url?: string;
}
