import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const InputCheckbox = ({ ...props }: Props) => {
  return (
    <div className="flex gap-x-3 m-4">
      <input type="checkbox" {...props} />
      <span>{props.text}</span>
    </div>
  );
};

export default InputCheckbox;
