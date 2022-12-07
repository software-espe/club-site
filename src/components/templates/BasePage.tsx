import Footer from '../organisms/Footer';
import Header from '../molecules/Header';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
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
