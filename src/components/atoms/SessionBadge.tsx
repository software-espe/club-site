import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const SessionBadge = ({ text, ...props }: Props) => {
  return (
    <div>
    <strong className='text-neutral-600'>¿Ya formas parte del Club?</strong>
    <button
      className=" mx-3 text-neutral-50 opacity-50 hover:opacity-100"
      {...props}
    >
      {text}
    </button>
    </div>
  );
};

export default SessionBadge;
