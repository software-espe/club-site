import React from 'react';
import InputText from '../atoms/InputText';
import { useFormik } from 'formik';
import { Member } from '../../interface/member.interface';
import { defaultMember } from '../../interface/models/member.default';

const ProfileForm = () => {
  const formik = useFormik({
    initialValues: defaultMember,
    onSubmit: (values: Member) => {
      console.error(values);
    }
  });

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
      <button type="submit">submit</button>
    </form>
  );
};
export default ProfileForm;
