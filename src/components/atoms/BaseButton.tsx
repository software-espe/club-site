import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const BaseButton = ({ text, className, ...buttonProps }: Props) => {
  return (
    <button
      {...buttonProps}
      className={`block border-2 border-white px-8 py-3 hover:bg-white 
      hover:text-gray hover:font-bold hover:shadow-blur
       transition-all ease-in-out rounded-xl disabled:opacity-20 disabled:pointer-events-none ${className}`}
    >
      {text}
    </button>
  );
};

export default BaseButton;
