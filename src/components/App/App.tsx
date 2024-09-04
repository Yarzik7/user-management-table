import './App.css';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux/reduxHooks';
import { fetchUsers } from '../../redux/users/operations';
import Filter from '../Filter/Filter';
import UserTable from '../UserTable/UserTable';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="visually-hidden">User Management Table</h1>
          <Filter />
          <UserTable />
        </div>
      </section>
    </main>
  );
}

export default App;
