import * as Yup from 'yup';
import { formatMaxLength } from '../tools/formatMessage.tools';

const req_string = 'Este campo es requerido';

const maxlength = 30;

const MemberSchema = Yup.object({
  name: Yup.string()
    .required(req_string)
    .max(maxlength, formatMaxLength('El nombre', maxlength)),
  surname: Yup.string()
    .required(req_string)
    .max(maxlength, formatMaxLength('El apellido', maxlength)),
  email: Yup.string().required(req_string),
  semester: Yup.number()
    .max(10, 'Semestre no válido')
    .typeError('El semestre debe ser un número')
});

export default MemberSchema;
