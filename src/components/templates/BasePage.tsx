import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { ReactNode } from 'react';
import { Authenticate } from './Authenticate';

interface Props {
  children?: ReactNode;
}

const BasePage = ({ children }: Props) => {
  return (
    <Authenticate className="h-full relative">
      <Header />
      {children}
      <Footer />
    </Authenticate>
  );
};

export default BasePage;
