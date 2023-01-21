import { FC, HTMLAttributes, ReactNode, useEffect } from 'react';
import { UserInfo } from '@firebase/auth';
import { firebaseAuth } from '../../lib/firebase/firebase.config';
import { login, logout } from '../../store/reducers/user.store';
import { useDispatch } from 'react-redux';

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
