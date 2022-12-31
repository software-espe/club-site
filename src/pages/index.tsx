import BasePage from '../components/templates/BasePage';
import Image from 'next/image';
import { NextPage } from 'next';
import Banner from '../components/molecules/Banner';

const Home: NextPage = () => {
  return (
    <BasePage>
      <Banner />
      <div className="h-screen overflow-hidden hidden lg:block relative">
        <Image
          alt="grid"
          className="object-contain"
          src="/images/gridBackground.svg"
          fill={true}
        />
        <div className="absolute z-10 bottom-[90px] left-2/4 ml-3 bg-gray-opaque rounded-xl w-[400px] h-[250px]"></div>
        <div className="absolute z-20 bottom-[200px] left-0 right-0 mx-auto bg-gray-light rounded-xl w-[400px] h-[250px]"></div>
        <div className="absolute z-10 bottom-[90px] right-2/4 mr-3 bg-gray-opaque rounded-xl w-[400px] h-[250px]"></div>
      </div>
      <div className="h-screen"></div>
    </BasePage>
  );
};

export default Home;
