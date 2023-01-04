import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { ReactNode } from 'react';
import { Authenticate } from './Authenticate';
import Head from 'next/head';

interface Props {
  title?: string;
  children?: ReactNode;
}

const BasePage = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Authenticate className="h-full relative">
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </Authenticate>
    </>
  );
};

export default BasePage;
