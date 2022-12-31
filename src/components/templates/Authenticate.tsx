import { FC, ReactNode, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../store/reducers/user.store';
import { firebaseAuth } from '../../lib/firebase/firebase.config';

interface Props {
  children: ReactNode | ReactNode[];
  verifyEmail?: boolean;
  isConfirmationPage?: boolean;
}

export const Authenticate: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const isUnmounted = useRef(false);

  useEffect(() => {
    const onAuthChange = firebaseAuth.onAuthStateChanged(async (loggedUser) => {
      if (loggedUser) {
        if (!loggedUser.emailVerified) {
          await dispatch(logout());
          return;
        }
        dispatch(login(loggedUser));
      }
    });
    return () => {
      onAuthChange();
      isUnmounted.current = true;
    };
  }, []);

  return <div>{children}</div>;
};
