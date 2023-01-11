import React from 'react'
import ComponentTemplateWithLabel from './ComponentTemplateWithLabel';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputEmail = ({ ...props }: Props) => {
  return (
    <ComponentTemplateWithLabel label="Correo">
      <div className="flex flex-col gap-y-9 items-center justify-center">
        <span className="bg-gray-light no-outline rounded-full w-[159px] h-[159px]" />
        <input
          type="email"
          className="bg-gray-light no-outline rounded-md p-2 text-center"
          disabled
          {...props}
        />
      </div>
    </ComponentTemplateWithLabel>
  )
}

export default InputEmail;
