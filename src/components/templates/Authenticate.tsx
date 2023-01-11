import { FC, ReactNode, useEffect, HTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../store/reducers/user.store';
import { firebaseAuth } from '../../lib/firebase/firebase.config';
import { UserInfo } from '@firebase/auth';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

export const Authenticate: FC<Props> = ({ children, ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (loggedUser) => {
      if (loggedUser) {
        if (!loggedUser.emailVerified) {
          await dispatch(logout());
          return;
        }
        const userInfo: UserInfo = {
          displayName: loggedUser.displayName,
          email: loggedUser.email,
          phoneNumber: loggedUser.phoneNumber,
          photoURL: loggedUser.photoURL,
          providerId: loggedUser.providerId,
          uid: loggedUser.uid
        };
        dispatch(login(userInfo));
      }
    });
  }, []);

  return <div {...props}>{children}</div>;
};
