import { InputHTMLAttributes, useEffect, useRef } from 'react';
import ComponentTemplateWithLabel from './ComponentTemplateWithLabel';
import { userSignIn } from '../../lib/services/auth.service';
import userSelector from '../../store/selectors/user.selector';

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  setter: (field: string, value: string) => void;
}

const InputEmail = ({ setter, ...props }: Props) => {
  const isMounting = useRef(true);
  const { user, isLogged } = userSelector();

  const signIn = async () => {
    const userSession = await userSignIn();
    const email = userSession?.email || '';
    setter('email', email);
    setter('id', userSession?.uid || '');
  };

  useEffect(() => {
    if (isLogged && isMounting.current) {
      setter('email', user.email || '');
      setter('id', user.uid || '');
      return () => {
        isMounting.current = false;
      };
    }
  }, [isLogged]);

  return (
    <ComponentTemplateWithLabel label="Correo">
      <div
        className="flex flex-col gap-y-9 items-center justify-center"
        {...props}
      >
        <div className="bg-gray-light overflow-hidden rounded-full w-40 h-40" />
        <button
          className="bg-gray-opaque hover:bg-gray-light no-outline rounded-md px-4 py-2 text-center"
          onClick={signIn}
        >
          {user?.email || 'Entrar con Google'}
        </button>
      </div>
    </ComponentTemplateWithLabel>
  );
};

export default InputEmail;
