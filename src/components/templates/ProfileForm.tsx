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
      <h2 className="md:pl-32 pl-9 mt-12 text-title font-bold">
        Formulario de Registro
      </h2>
      <div className="flex lg:flex-row flex-col pt-10 md:mx-36 mx-auto">
        <div className="flex flex-col lg:w-1/2">
          <div className="mx-auto mt-12 mb-4 lg:mr-28">
            <FormPhotoInput
              width={159}
              height={159}
              name="photo"
              inputId="photo"
              acceptedExtensions={['.jpg', '.png']}
            />
          </div>
          <div className="mx-auto mb-10 lg:mr-10">
            <InputEmail setter={formik.setFieldValue} />
          </div>
          <div className="mx-auto lg:mr-10 ">
            <SectionWithLabel label="Redes Sociales">
              <div className="flex flex-col gap-y-7 mt-8">
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
              </div>
            </SectionWithLabel>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 mx-auto mt-8">
          <div className="flex flex-col max-w-[290px] lg:gap-y-20 gap-y-7 lg:ml-10">
            <FormInput type="text" label="Nombre" name="name" />
            <FormInput type="text" label="Apellido" name="surname" />
            <FormInput type="text" label="Carrera" name="career" />
            <FormInput type="text" name="semester" label="Semestre actual" />

            <InputCheckbox
              text="Tengo experiencia en programación"
              checked={formik.values.experience}
              onChange={formik.handleChange}
            />
          </div>

          {/*<InputDate*/}
          {/*label="Fecha de Nacimiento"*/}
          {/*value={formik.values.birthdate?.toDateString()}*/}
          {/*onChange={formik.handleChange}*/}
          {/*/>*/}
        </div>
      </div>
      <div className="flex items-center justify-center mb-28 mt-16">
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
