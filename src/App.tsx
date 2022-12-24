import './assets/scss/index.scss';

import { Layout } from './components/Layout';
import { Header } from './layouts/Header';
import { UsersList } from './layouts/UsersList';

const App = () => {
  return (
    <Layout>
      <Header />
      <UsersList />
    </Layout>
  );
};

export default App;
