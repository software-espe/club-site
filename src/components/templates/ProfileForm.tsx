import React from 'react';
import FormInput from '../molecules/FormInput';
import { useFormik, FormikProvider } from 'formik';
import { Member } from '../../interface/member.interface';
import { defaultMember } from '../../interface/models/member.default';
import BaseButton from '../atoms/BaseButton';
import InputWithIcon from '../atoms/InputWithIcon';
import InputEmail from '../atoms/InputEmail';
import ComponentTemplateWithLabel from '../atoms/ComponentTemplateWithLabel';
import InputCheckbox from '../atoms/InputCheckbox';
import { fetchRegisterMember } from '../../lib/services/members.service';
import MemberSchema from '../../schemas/Member.schema';

const ProfileForm = () => {
  const handleSubmit = async (values: Member) => {
    const { id, ...member } = values;
    await fetchRegisterMember(id, member);
  };

  const formik = useFormik({
    initialValues: defaultMember,
    validationSchema: MemberSchema,
    onSubmit: async (values: Member) => {
      await handleSubmit(values);
    }
  });
  return (
    <FormikProvider value={formik}>
      <h2 className="pl-32 mt-20 text-title font-bold">
        Formulario de Registro
      </h2>
      <div className="flex flex-row gap-x-32 px-48 py-12">
        <div className="flex flex-col gap-y-8 w-1/2 m-4">
          <InputEmail setter={formik.setFieldValue} />
          <ComponentTemplateWithLabel label="Redes">
            <InputWithIcon
              src="/icons/linkedin.svg"
              alt="Linkedin icon"
              id="linkedinIcon"
              name="socials.linkedin"
              placeholder="linkedin/"
              value={formik.values.socials.linkedin}
              onChange={formik.handleChange}
            />
            <InputWithIcon
              src="/icons/twitter.svg"
              alt="Twitter icon"
              name="socials.twitter"
              placeholder="@"
              value={formik.values.socials.twitter}
              onChange={formik.handleChange}
            />
            <InputWithIcon
              src="/icons/whatsapp.svg"
              alt="Whatsapp icon"
              name="socials.whatsapp"
              placeholder="+593"
              value={formik.values.socials.whatsapp}
              onChange={formik.handleChange}
            />
          </ComponentTemplateWithLabel>
        </div>
        <div className="flex flex-col w-1/2">
          <FormInput
            type="text"
            label="Nombre"
            name="name"
            onChange={formik.handleChange}
          />
          <FormInput
            type="text"
            label="Apellido"
            name="surname"
            onChange={formik.handleChange}
          />
          {/*<InputDate*/}
          {/*label="Fecha de Nacimiento"*/}
          {/*value={formik.values.birthdate?.toDateString()}*/}
          {/*onChange={formik.handleChange}*/}
          {/*/>*/}
          <FormInput type="text" id="career" label="Carrera" name="career" />
          <FormInput
            type="text"
            id="currentSemester"
            label="Semestre actual"
            name="semester"
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
        <BaseButton
          disabled={!formik.isValid}
          text="Registrarse"
          type="submit"
          onClick={formik.submitForm}
        />
      </div>
    </FormikProvider>
  );
};

export default ProfileForm;
