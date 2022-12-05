import Header from '../components/molecules/Header';
import { NextPage } from 'next';

const Home: NextPage = () => <Header userName="User Name" online={true} />;

export default Home;
