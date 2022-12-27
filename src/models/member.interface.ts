export type role = 'Member' | 'Staff' | 'TopMember';

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
  label?: boolean;
}
