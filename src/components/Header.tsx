import { useState } from 'react';

const Header = () => {
  const [userName, setUserName] = useState('Juan Pérez');

  return (
    <div className="flex justify-end h-24 w-full bg-gray-background">
      <h3
        role="userName"
        className="mt-[3.25rem] mr-[1.25rem] font-bold text-small leading-[1.2rem]"
      >
        {userName}
      </h3>
      <span
        role="userPicture"
        className="w-[3.375rem] h-[3.375rem] rounded-full mt-[2.125rem] mr-[-1.125rem] bg-gray-light"
      ></span>
      <span
        role="userStatus"
        className="w-[1.188rem] h-[1.188rem] rounded-full mt-[2.25rem] mr-16 bg-green-light border-[3px] border-gray box-border"
      ></span>
    </div>
  );
};

export default Header;
