import { FormikProvider, useFormik } from 'formik';
import { Member } from '../../interface/member.interface';
import { defaultMember } from '../../interface/models/member.default';
import { fetchRegisterMember } from '../../lib/services/members.service';
import BaseButton from '../atoms/BaseButton';
import FormInput from '../molecules/FormInput';
import FormPhotoInput from '../molecules/FormPhotoInput';
import InputCheckbox from '../atoms/InputCheckbox';
import InputEmail from '../atoms/InputEmail';
import MemberSchema from '../../schemas/Member.schema';
import React from 'react';
import SectionWithLabel from '../atoms/SectionWithLabel';

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
      <h2 className="pl-32 mt-12 text-title font-bold">
        Formulario de Registro
      </h2>
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col">
          <FormPhotoInput
            width={300}
            height={300}
            name="photo"
            inputId="photo"
            acceptedExtensions={['.jpg', '.png']}
          />
          <InputEmail setter={formik.setFieldValue} />
          <SectionWithLabel label="Redes Sociales">
            <FormInput
              icon="/icons/linkedin.svg"
              name="socials.linkedin"
              label="Linkedin"
            />
            <FormInput
              icon="/icons/twitter.svg"
              label="Twitter"
              name="socials.twitter"
            />
            <FormInput
              icon="/icons/whatsapp.svg"
              name="socials.whatsapp"
              label="Whatsapp"
            />
          </SectionWithLabel>
        </div>

        <div className="flex flex-col w-1/2">
          <div className="md:w-[650px] w-full flex flex-col lg:flex-row justify-around items-center">
            <FormInput type="text" label="Nombre" name="name" />
            <FormInput type="text" label="Apellido" name="surname" />
          </div>

          <div className="md:w-[650px] w-full flex flex-col lg:flex-row justify-around items-center">
            <FormInput type="text" label="Carrera" name="career" />
            <FormInput type="text" name="semester" label="Semestre actual" />
          </div>

          {/*<InputDate*/}
          {/*label="Fecha de Nacimiento"*/}
          {/*value={formik.values.birthdate?.toDateString()}*/}
          {/*onChange={formik.handleChange}*/}
          {/*/>*/}
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
