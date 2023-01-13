import { FunctionComponent, InputHTMLAttributes } from 'react';
import { ErrorMessage, useField } from 'formik';
import FieldError from '../atoms/FieldError';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  autoComplete?: string;
  label?: string;
}

export const FormInput: FunctionComponent<FormInputProps> = ({
  className,
  name,
  type,
  label,
  autoComplete = 'off',
  ...inputProps
}) => {
  const [_field, _meta, { setTouched }] = useField(name);

  const onFieldBlur = () => {
    setTouched(true);
  };

  return (
    <div className="h-24 flex flex-col mb-4">
      {label && (
        <label htmlFor={name} className="text-blue font-medium text-xs mb-2">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={`bg-gray-light no-outline rounded-md px-5 py-2 ${className}`}
        type={type}
        name={name}
        onBlur={onFieldBlur}
        autoComplete={autoComplete}
      />
      <ErrorMessage name={name} render={FieldError} />
    </div>
  );
};

export default FormInput;
