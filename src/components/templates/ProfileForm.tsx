import React from 'react';
import InputText from '../atoms/InputText';
import { useFormik } from 'formik';
import { Member } from '../../interface/member.interface';
import { defaultMember } from '../../interface/models/member.default';
import axios from 'axios';

const ProfileForm = () => {
  const formik = useFormik({
    initialValues: defaultMember,
    onSubmit: (values: Member) => {
      console.error(values);
    }
  });

  //TODO: clena hardcoded data
  const emailBody = {
    templateId: process.env.SENDGRID_JOIN_TEMPLATE_ID,
    to: 'kekepast3@gmail.com',
    mailDetails: {
      name: formik.values.name
    }
  };

  const sendEmail = async () => {
    await axios.post('/api/email', emailBody);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputText
        id="name"
        label="Nombre"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <InputText
        id="surname"
        label="Apellido"
        name="surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
      />
      <button type="submit" onClick={sendEmail}>
        submit
      </button>
    </form>
  );
};
export default ProfileForm;
