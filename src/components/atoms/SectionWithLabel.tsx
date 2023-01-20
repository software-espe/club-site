import React from 'react';

interface Props {
  label: string;
  children?: React.ReactNode;
}

const SectionWithLabel: React.FC<Props> = ({ label, children }) => {
  return (
    <div className="flex flex-col">
      <label className="text-small mb-2">{label}</label>
      <div className="flex flex-col gap-3 px-3">{children}</div>
    </div>
  );
};

export default SectionWithLabel;
