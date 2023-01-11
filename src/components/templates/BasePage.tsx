import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { ReactNode } from 'react';
import { Authenticate } from './Authenticate';
import Head from 'next/head';

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
