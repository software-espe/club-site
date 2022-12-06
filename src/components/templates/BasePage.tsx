import Footer from '../molecules/Footer';
import Header from '../molecules/Header';
import { ReactElement } from 'react';

interface Props {
  children?: ReactElement;
}

const BasePage = ({ children }: Props) => {
  return (
    <>
      <Header userName="User Name" online={true} />
      {children}
      <Footer />
    </>
  );
};

export default BasePage;
