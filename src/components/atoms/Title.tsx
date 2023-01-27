import React from 'react';

interface Props {
  main: string;
  sub: string;
}

const Title = ({ main, sub }: Props) => {
  return (
    <div className="center-col p-6">
      <h1 className="text-body text-center md:text-title font-bold">{main}</h1>
      <h2 className="text-small md:text-body text-gray-super">{sub}</h2>
    </div>
  );
};

export default Title;
