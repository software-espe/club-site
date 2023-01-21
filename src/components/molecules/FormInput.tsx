import { ErrorMessage, useField } from 'formik';
import { Input } from '@material-tailwind/react';
import FieldError from '../atoms/FieldError';
import Image from 'next/image';
import React, { FC } from 'react';

interface FormInputProps {
  name: string;
  type?: string;
  className?: string;
  label: string;
  icon?: string;
}

const FormInput: FC<FormInputProps> = ({
  className,
  name,
  label,
  icon,
  type = 'text'
}) => {
  const [field, _meta, { setTouched }] = useField(name);

  const onFieldBlur = () => {
    setTouched(true);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row gap-4">
        {icon && <Image src={icon} alt={label} width={28} height={28} />}
        <Input
          id={name}
          value={field.value}
          onChange={field.onChange}
          name={name}
          label={label}
          className="no-outline text-base"
          type={type}
          onBlur={onFieldBlur}
        />
      </div>
      <ErrorMessage name={name} render={FieldError} />
    </div>
  );
};

export default FormInput;
