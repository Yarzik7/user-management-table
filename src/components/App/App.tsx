import { useAppDispatch } from '../../hooks/redux/reduxHooks';
import { useEffect } from 'react';

import { fetchUsers } from '../../redux/users/operations';

import Layout from '../Layout/Layout';
import Filter from '../Filter/Filter';
import UserTable from '../UserTable/UserTable';
import { APPLICATION_NAME } from '../../constants/application';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Layout>
      <h1 className="visually-hidden">{APPLICATION_NAME}</h1>
      <Filter />
      <UserTable />
    </Layout>
  );
}

export default App;
