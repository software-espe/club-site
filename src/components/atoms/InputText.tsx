import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputText = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col m-4">
      <label className="text-small mb-2" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="bg-gray-light no-outline rounded-md px-5 py-2"
        {...props}
      />
    </div>
  );
};

export default InputText;
