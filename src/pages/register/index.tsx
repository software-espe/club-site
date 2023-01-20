import { NextPage } from 'next';
import BasePage from '../../components/templates/BasePage';
import Image from 'next/image';

const Index: NextPage = () => {
  return (
    <BasePage title="Registro de miembros">
      <button className="bg-gray-opaque hover:bg-gray-light no-outline rounded-md px-4 py-2 text-center">
        <div className="center gap-4">
          <Image src="/icons/google.svg" alt="google" width={30} height={30} />
          Entrar con correo de la ESPE
        </div>
      </button>
    </BasePage>
  );
};

export default Index;
