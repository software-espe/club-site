import React, { FC } from 'react';

interface Props {
  name: string;
  children?: React.ReactNode;
  isLast?: boolean;
}

const MemberSection: FC<Props> = ({ name, children, isLast = false }) => {
  return (
    <section className="md:px-20 px-10 pb-10 w-full">
      <h2 className="font-bold center lg:justify-start whitespace-nowrap lg:text-title text-body mb-14">
        {name}
      </h2>
      <div className="center lg:flex-row flex-col mb-20">{children}</div>
      {!isLast && <hr className="border-gray-super" />}
    </section>
  );
};

export default MemberSection;
