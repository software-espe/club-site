import React from 'react';

interface Props {
  label: string;
  children: React.ReactNode;
}

const ComponentTemplateWithLabel: React.FC<Props> = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-y-7">
      <label className="text-small mb-2">{label}</label>
      {children}
    </div>
  );
};

export default ComponentTemplateWithLabel;
