import { NextPage } from 'next';
import Banner from '../components/molecules/Banner';
import BasePage from '../components/templates/BasePage';
import GroupsContainer from '../components/molecules/GroupsContainer';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <BasePage title="Club de Software - ESPE">
      <Banner />
      <div className="h-screen overflow-hidden hidden lg:block relative">
        <Image
          alt="grid"
          className="object-cover"
          src="/images/gridBackground.svg"
          fill={true}
        />
        <div className="absolute z-10 top-[200px] left-2/4 ml-5 bg-gray-opaque rounded-xl w-[500px] h-[300px]"></div>
        <div className="absolute z-20 top-[90px] left-0 right-0 mx-auto bg-gray-light rounded-xl w-[500px] h-[300px]"></div>
        <div className="absolute z-10 top-[200px] right-2/4 mr-5 bg-gray-opaque rounded-xl w-[500px] h-[300px]"></div>
      </div>
      <GroupsContainer />
    </BasePage>
  );
};

export default Home;
