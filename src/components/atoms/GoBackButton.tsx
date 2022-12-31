import React, { HTMLAttributes } from 'react';
import Image from 'next/image';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isHome?: boolean;
}

const GoBackButton = ({ className, isHome, ...props }: Props) => {
  return (
    <button
      className={`hover:opacity-100 opacity-50 center gap-2 ${
        isHome && 'invisible'
      } ${className}`}
      {...props}
    >
      <Image
        className="rotate-90"
        width={15}
        height={15}
        src="/icons/arrow.svg"
        alt="back"
      />
      <span className="text-small font-normal">Volver</span>
    </button>
  );
};

export default GoBackButton;
