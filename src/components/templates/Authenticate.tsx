import { FC, ReactNode, useEffect, useRef, HTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout, setLoading } from '../../store/reducers/user.store';
import { firebaseAuth } from '../../lib/firebase/firebase.config';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

export const Authenticate: FC<Props> = ({ children, ...props }) => {
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
        dispatch(setLoading(false));
      }
    });
    return () => {
      onAuthChange();
      isUnmounted.current = true;
    };
  }, []);

  return <div {...props}>{children}</div>;
};
