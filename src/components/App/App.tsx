import './App.css';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux/reduxHooks';
import { fetchUsers } from '../../redux/users/operations';
import Filter from '../Filter/Filter';
import UserTable from '../UserTable/UserTable';

function App() {
  // console.log("Render App");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <section>
      <div className="container">
        <h1 className="head">User Management Table</h1>
        <Filter />
        <UserTable />
      </div>
    </section>
  );
}

export default App;
