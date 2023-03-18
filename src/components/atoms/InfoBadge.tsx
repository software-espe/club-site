import React from 'react';

type badgeType = 'FAQ' | 'INFO';

interface Props {
  type?: badgeType;
}

const InfoBadge = ({ type = 'FAQ' }: Props) => {
  return (
    <div className="center bg-warning text-warning-dark font-bold px-2 py-1 rounded text-xs">
      <span>{type}</span>
    </div>
  );
};

export default InfoBadge;
