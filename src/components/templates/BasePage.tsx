import Footer from '../organisms/Footer';
import Header from '../molecules/Header';
import { ReactNode } from 'react';
import { Authenticate } from './Authenticate';

interface Props {
  children?: ReactNode;
}

const BasePage = ({ children }: Props) => {
  return (
    <div className="h-full relative">
      <Authenticate>
        <Header />
        {children}
        <Footer />
      </Authenticate>
    </div>
  );
};

export default BasePage;
