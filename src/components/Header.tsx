import { useState } from 'react';

const Header = () => {
  const [userName, setUserName] = useState('Juan Pérez');

  return (
    <div className="flex justify-end h-[96px] w-full bg-[#1E1E1E]">
      <h3 className="mt-[52px] mr-[20px] font-bold text-[16px] leading-[19.36px]">
        {userName}
      </h3>
      <span className="w-[54px] h-[54px] rounded-full mt-[34px] mr-[-17px] bg-[#2E2E2E]"></span>
      <span className="w-[19px] h-[19px] rounded-full mt-[36px] mr-[63px] bg-[#0FDA78] border-[3px] border-[#202020] box-border"></span>
    </div>
  );
};

export default Header;
