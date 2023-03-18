import { NextPage } from 'next';
import { useRouter } from 'next/router';
import BaseButton from '../../components/atoms/BaseButton';
import BasePage from '../../components/templates/BasePage';
import GoogleLogin from '../../components/molecules/GoogleLogin';
import InfoBlock from '../../components/atoms/InfoBlock';
import ProgressBadge from '../../components/atoms/ProgressBadge';
import React from 'react';
import Title from '../../components/atoms/Title';
import userSelector from '../../store/selectors/user.selector';

const progressLabels = {
  success: 'Correo Válido',
  loading: 'Validando...',
  error: 'Correo Inválido'
};

const Index: NextPage = () => {
  const router = useRouter();
  const { user, isLoading, isLogged, triedToLogin } = userSelector();

  const loginSuccess = !isLoading && isLogged && user?.status === 'verified';

  const redirectToForm = async () => {
    await router.push('/register/form');
  };

  return (
    <BasePage title="Registro de miembros">
      <Title
        main="Aplica con el correo de la Universidad"
        sub="Ingresa a través del ícono de google"
      />
      <div className="center flex-col md:flex-row md:gap-40 gap-10 mt-8 md:mt-32">
        <div className="center-col gap-4 h-1/2">
          <GoogleLogin />
          {(triedToLogin || isLogged) && (
            <ProgressBadge
              labels={progressLabels}
              status={
                isLoading ? 'loading' : loginSuccess ? 'success' : 'error'
              }
            />
          )}
        </div>
        <div className="center-col gap-4">
          <span className="text-xs md:text-body">
            Vas a realizar tu aplicación con el siguiente correo:
          </span>
          <div className="bg-gray-light center px-4 rounded-lg h-12 min-w-[300px]">
            <span className="opacity-40 select-none">
              {user?.email || '...@espe.edu.ec'}
            </span>
          </div>
          <div className="mt-12 w-[400px] center-col">
            <BaseButton
              onClick={redirectToForm}
              disabled={!loginSuccess}
              className="bg-gray whitespace-nowrap text-small md:text-body"
              text="Continuar al formulario de registro"
            />
            <p className="text-gray-super text-sm md:text-small mt-4 w-80 text-center">
              Al hacer click en continuar, acepto recibir correos a la dirección
              de correo proporcionada
            </p>
          </div>
        </div>
      </div>

      <div className="border-b w-1/2 mt-32 mb-6" />

      <InfoBlock title="¿Por qué correo de la Universidad?">
        <p>
          El club de Software de la universidad de las Fuerzas Armadas ESPE
          acepta aplicaciones únicamente de estudiantes de la universidad.
        </p>
        <p>
          Para comprobar que se cumpla con este requisito, pedimos a todo
          candidato y potencial miembro del club el registrarse utilizando el
          correo de la universidad. Gracias por su compresión.
        </p>
        <p>Puede leer más al respecto en nuestros términos y condiciones</p>
      </InfoBlock>
    </BasePage>
  );
};

export default Index;
