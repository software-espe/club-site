import React from 'react';
import GroupCard from '../atoms/GroupCard';

const GroupsContainer = () => {
  return (
    <div className="flex flex-col m-0 gap-y-24 px-24 py-12">
      <div>
        <h2 className="lg:text-title text-subtitle  font-bold">
          Nuestros Grupos
        </h2>
      </div>
      <div className="flex lg:flex-row flex-wrap gap-y-4  gap-x-10 justify-center">
        <GroupCard labelCard="Web" pathImage="" />
        <GroupCard labelCard="AI" pathImage="" />
        <GroupCard labelCard="IoT" pathImage="" />
        <GroupCard labelCard="Security" pathImage="" />
        <GroupCard labelCard="Cloud" pathImage="" />
      </div>
    </div>
  );
};

export default GroupsContainer;
