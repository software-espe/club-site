import BaseButton from '../components/atoms/BaseButton';
import BasePage from '../components/templates/BasePage';
import Image from 'next/image';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const redirectToMembers = async () => {
    await router.push('/members');
  };

  const redirectToRegister = async () => {
    await router.push('/register');
  };

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
          <BaseButton
            onClick={redirectToRegister}
            style={{ width: 150 }}
            text="Unirme"
          />
          <BaseButton
            onClick={redirectToMembers}
            style={{ width: 300 }}
            text="Conocer a los miembros"
          />
        </div>
      </div>
      <div className="w-full h-screen overflow-hidden hidden lg:block relative">
        <Image
          alt="grid"
          className="object-contain"
          src="/images/gridBackground.svg"
          fill={true}
        />
      </div>
    </BasePage>
  );
};

export default Home;
