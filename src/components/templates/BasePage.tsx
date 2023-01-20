import { Authenticate } from './Authenticate';
import { ReactNode } from 'react';
import Footer from '../organisms/Footer';
import Head from 'next/head';
import Header from '../organisms/Header';

interface Props {
  title?: string;
  children?: ReactNode;
  backTo?: string;
}

const BasePage = ({ children, title, backTo }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Authenticate className="h-full relative">
        <Header backTo={backTo} />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </Authenticate>
    </>
  );
};

export default BasePage;
