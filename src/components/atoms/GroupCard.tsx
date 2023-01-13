import React from 'react';
import Image from 'next/image';

interface Props {
  labelCard: string;
  pathImage: string;
}

const GroupCard = ({ labelCard, pathImage }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-y-[14px]">
      {pathImage === '' ? (
        <div className="px-[53px] pb-[106px] bg-gray-opaque rounded-xl " />
      ) : (
        <Image src={pathImage} alt="group logo" width={106} height={106} />
      )}
      <div className="flex lg:text-[32px] text-[26px] font-bold justify-center">
        <h2>{labelCard}</h2>
      </div>
    </div>
  );
};

export default GroupCard;
