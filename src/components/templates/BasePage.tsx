import Footer from '../organisms/Footer';
import Header from '../molecules/Header';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const BasePage = ({ children }: Props) => {
  return (
    <div className="h-full relative">
      <Header userName="User Name" online={true} />
      {children}
      <Footer />
    </div>
  );
};

export default BasePage;
