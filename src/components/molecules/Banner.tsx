import { login } from '../../store/reducers/user.store';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { userSignIn } from '../../lib/services/auth.service';
import BaseButton from '../atoms/BaseButton';
import Image from 'next/image';
import React from 'react';
import SessionBadge from '../atoms/SessionBadge';
import userSelector from '../../store/selectors/user.selector';

const Banner = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isLogged } = userSelector();

  const redirectToMembers = async () => {
    await router.push('/members');
  };

  const redirectToRegister = async () => {
    await router.push('/register');
  };

  const redirectToForm = async () => {
    await router.push('/register/form');
  };

  const redirectToProfile = async () => {
    await router.push(`/members/${user.uid}`);
  };

  const signIn = async () => {
    const userSession = await userSignIn();
    if (userSession) {
      dispatch(login(userSession));
    }
  };

  const isVerified = isLogged && user?.status === 'verified';
  const isNotVerified = isLogged && user?.status === 'unverified';
  const isBanned = isLogged && user?.status === 'banned';
  const hasNoRole = !user?.role;

  const isInProgress = isVerified && hasNoRole;
  const isMember = isVerified && user?.role === 'member';
  const needsToRegister = isNotVerified || isBanned || !isLogged;

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
        {isInProgress && (
          <BaseButton
            onClick={redirectToForm}
            className="bg-gray whitespace-nowrap w-[270px]"
            text="Continuar aplicación"
          />
        )}
        {isMember && (
          <BaseButton
            onClick={redirectToProfile}
            className="bg-gray w-[200px]"
            text="Ir a mi perfil"
          />
        )}
        {needsToRegister && (
          <BaseButton
            onClick={redirectToRegister}
            className="bg-gray w-[150px]"
            text="Aplicar"
          />
        )}
        <BaseButton
          onClick={redirectToMembers}
          className="bg-gray w-[300px]"
          text="Conocer a los miembros"
        />
      </div>
      {!isLogged && <SessionBadge onClick={signIn} />}
    </div>
  );
};

export default Banner;
