import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { userSignIn } from '../../lib/services/auth.service';
import Image from 'next/image';
import SectionWithLabel from './SectionWithLabel';
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
    <SectionWithLabel label="Correo">
      <div
        className="flex flex-col gap-y-9 items-center justify-center"
        {...props}
      >
        <button
          className="bg-gray-opaque hover:bg-gray-light no-outline rounded-md px-4 py-2 text-center"
          onClick={signIn}
        >
          <div className="center gap-4">
            <Image
              src="/icons/google.svg"
              alt="google"
              width={30}
              height={30}
            />
            {user?.email || 'Entrar con correo de la ESPE'}
          </div>
        </button>
      </div>
    </SectionWithLabel>
  );
};

export default InputEmail;
