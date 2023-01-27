import Image from 'next/image';
import React from 'react';

type Status = 'success' | 'loading' | 'error';

interface Props {
  status: Status;
  labels: Record<Status, string>;
  icons?: Record<Status, string>;
}

const ProgressBadge = ({
  status,
  labels,
  icons = {
    success: '/icons/correct.svg',
    loading: '/icons/waiting.svg',
    error: '/icons/incorrect.svg'
  }
}: Props) => {
  return (
    <div className={`center gap-2 ${status === 'loading' && 'animate-pulse'}`}>
      <Image src={icons[status]} alt={labels[status]} width={25} height={25} />
      <span>{labels[status]}</span>
    </div>
  );
};

export default ProgressBadge;
