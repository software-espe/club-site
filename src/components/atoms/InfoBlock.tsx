import InfoBadge from './InfoBadge';
import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const InfoBlock = ({ title, children }: Props) => {
  return (
    <article className="p-10">
      <div className="flex gap-3 mb-4">
        <InfoBadge />
        <h3 className="font-bold md:text-base text-sm">{title}</h3>
      </div>
      <div className="text-xs md:text-small opacity-70 leading-8">
        {children}
      </div>
    </article>
  );
};

export default InfoBlock;
