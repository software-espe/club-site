import React from 'react';
import Image from 'next/image';
import BaseButton from '../atoms/BaseButton';
import { useRouter } from 'next/router';
import userSelector from '../../store/selectors/user.selector';

const Banner = () => {
  const router = useRouter();

  const redirectToMembers = async () => {
    await router.push('/members');
  };

  const redirectToRegister = async () => {
    await router.push('/register');
  };

  const redirectToProfile = async (uid: string) => {
    await router.push(`/members/${uid}`);
  };

  const { user, isLogged } = userSelector();

  return (
    <div className="h-[calc(100vh-12rem)] center-col md:mt-0 gap-8">
      <Image src="/images/logo.svg" alt="logo" width={152} height={172} />
      <div className="center-col">
        <span className="lg:text-title text-subtitle">Club de</span>
        <h1 className="lg:text-headline text-bigTitle font-bold">Software</h1>
        <h2 className="lg:text-subtitle text-small">
          Universidad de las Fuerzas Armadas ESPE
        </h2>
      </div>
      <div className="center lg:flex-row flex-col  gap-4 z-10">
        <>
          {isLogged ? (
            <BaseButton
              onClick={() => redirectToProfile(user.uid)}
              className="bg-gray w-[200px]"
              text="Ir a mi perfil"
            />
          ) : (
            <BaseButton
              onClick={redirectToRegister}
              className="bg-gray w-[150px]"
              text="Unirme"
            />
          )}
        </>

        <BaseButton
          onClick={redirectToMembers}
          className="bg-gray w-[300px]"
          text="Conocer a los miembros"
        />
      </div>
    </div>
  );
};

export default Banner;
