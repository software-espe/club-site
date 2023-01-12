import { Member } from '../member.interface';

export const defaultMember: Omit<Member, 'id'> = {
  name: '',
  surname: '',
  email: '',
  socials: {
    linkedin: '',
    whatsapp: '',
    twitter: ''
  },
  role: 'candidate',
  label: undefined,
  birthdate: '',
  career: '',
  currentSemester: '',
  experience: false,
  picture_url: undefined
};
