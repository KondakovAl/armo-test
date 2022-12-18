import './assets/scss/index.scss';

import { Layout } from './components/Layout';
import { UsersList } from './components/UsersList';

import { Header } from './components/Header';

const App = () => {
  return (
    <Layout>
      <Header />
      <UsersList />
    </Layout>
  );
};

export default App;
