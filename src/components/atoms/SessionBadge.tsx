import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const SessionBadge = ({ text, ...props }: Props) => {
  return (
    <button
      className="border-blue-50 border px-4 py-2 rounded-lg opacity-50 hover:opacity-100"
      {...props}
    >
      {text}
    </button>
  );
};

export default SessionBadge;
