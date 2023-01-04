import BasePage from '../components/templates/BasePage';
import { NextPage } from 'next';
import ProfileForm from '../components/templates/ProfileForm';

const Register: NextPage = () => {
  return (
    <BasePage title="Registro de candidatos">
      <ProfileForm />
    </BasePage>
  );
};

export default Register;
