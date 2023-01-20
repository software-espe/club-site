import { NextPage } from 'next';
import BasePage from '../../components/templates/BasePage';
import ProfileForm from '../../components/templates/ProfileForm';

const Form: NextPage = () => {
  return (
    <BasePage title="Registro de candidatos">
      <ProfileForm />
    </BasePage>
  );
};

export default Form;
