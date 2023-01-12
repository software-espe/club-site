import React from 'react';
import InputText from '../atoms/InputText';
import { useFormik } from 'formik';
import { Member } from '../../interface/member.interface';
import { defaultMember } from '../../interface/models/member.default';
import BaseButton from '../atoms/BaseButton';
import InputWithIcon from '../atoms/InputWithIcon';
import InputEmail from '../atoms/InputEmail';
import ComponentTemplateWithLabel from '../atoms/ComponentTemplateWithLabel';
import InputDate from '../molecules/InputDate';
import InputCheckbox from '../atoms/InputCheckbox';
import { fetchRegisterMember } from '../../lib/services/members.service';

const ProfileForm = () => {
  const handleSubmit = async (values: Member) => {
    const { id, ...member } = values;
    await fetchRegisterMember(id, member);
  };

  const formik = useFormik({
    initialValues: defaultMember,
    onSubmit: async (values: Member) => {
      await handleSubmit(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="pl-32 mt-20 text-title font-bold">
        Formulario de Registro
      </h2>
      <div className="flex flex-row gap-x-32 px-48 py-12">
        <div className="flex flex-col gap-y-8 w-1/2 m-4">
          <InputEmail setter={formik.setFieldValue} />
          <ComponentTemplateWithLabel label="Redes">
            <>
              <InputWithIcon
                src="/icons/linkedin.svg"
                alt="Linkedin icon"
                id="linkedinIcon"
                name="linkedinIcon"
                placeholder="linkedin/"
                value={formik.values.socials.linkedin}
                onChange={formik.handleChange}
              />
              <InputWithIcon
                src="/icons/twitter.svg"
                alt="Twitter icon"
                name="twitterIcon"
                placeholder="@"
                value={formik.values.socials.twitter}
                onChange={formik.handleChange}
              />
              <InputWithIcon
                src="/icons/whatsapp.svg"
                alt="Whatsapp icon"
                name="whatsappIcon"
                placeholder="+593"
                value={formik.values.socials.whatsapp}
                onChange={formik.handleChange}
              />
            </>
          </ComponentTemplateWithLabel>
        </div>
        <div className="flex flex-col w-1/2">
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
          <InputDate
            label="Fecha de Nacimiento"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
          />
          <InputText
            id="career"
            label="Carrera"
            name="career"
            value={formik.values.career}
            onChange={formik.handleChange}
          />
          <InputText
            id="currentSemester"
            label="Semestre actual"
            name="currentSemester"
            value={formik.values.currentSemester}
            onChange={formik.handleChange}
          />
          <InputCheckbox
            text="Tengo experiencia en programación"
            checked={formik.values.experience}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mb-28">
        <BaseButton text="Registrarse" onClick={formik.submitForm} />
      </div>
    </form>
  );
};

export default ProfileForm;
