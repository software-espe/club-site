import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';

const Landing = () => {
  return (
    <>
      <Header userName="User Name" online={true} />
      <Footer />
    </>
  );
};

export default Landing;
