import BaseButton from '../components/atoms/BaseButton';
import BasePage from '../components/templates/BasePage';
import Image from 'next/image';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <BasePage>
      <div className="center-col md:mt-0 gap-8 mt-10">
        <Image src="/images/logo.svg" alt="logo" width={152} height={172} />
        <div className="center-col">
          <span className="lg:text-title text-subtitle">Club de</span>
          <h1 className="lg:text-headline text-bigTitle font-bold">Software</h1>
          <h2 className="lg:text-subtitle text-small">
            Universidad de las Fuerzas Armadas ESPE
          </h2>
        </div>
        <div className="center lg:flex-row flex-col  gap-4 mb-32">
          <BaseButton style={{ width: 150 }} text="Unirme" />
          <BaseButton style={{ width: 300 }} text="Conocer a los miembros" />
        </div>
      </div>
      <div className="grid-background h-[300px]" />
    </BasePage>
  );
};

export default Home;
