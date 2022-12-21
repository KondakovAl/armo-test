import './assets/scss/index.scss';

import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { UsersList } from './components/UsersList';

const App = () => {
  return (
    <Layout>
      <Header />
      <UsersList />
    </Layout>
  );
};

export default App;
