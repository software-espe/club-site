import { FC, HTMLAttributes, ReactNode, useEffect } from 'react';
import { firebaseAuth } from '../../lib/firebase/firebase.config';
import { getInfoFromUser } from '../../tools/user.tools';
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
        const userInfo = getInfoFromUser(loggedUser);
        dispatch(login(userInfo));
      }
    });
  }, []);

  return <div {...props}>{children}</div>;
};
