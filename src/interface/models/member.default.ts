import {Member} from '../member.interface';

export const defaultMember: Omit<Member, 'id'> = {
	name: '',
	surname: '',
	email: '',
	socials: {
		linkedin: '',
		whatsapp: '',
		twitter: ''
	},
	role: 'Candidate',
	label: undefined,
	birthdate: '',
	career: '',
	currentSemester: '',
	experience: false,
	label: undefined,
	picture_url: undefined
};
