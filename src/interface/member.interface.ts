export type role = 'Member' | 'Staff' | 'TopMember' | 'Candidate';

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
  birthdate: string;
  career: string;
  currentSemester: string;
  experience: boolean;
  picture_url?: string;
}
