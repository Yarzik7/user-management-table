import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/reduxHooks';
import { fetchUsers } from '../../redux/users/operations';
import { selectUsers } from '../../redux/users/selectors';
import Filter from '../Filter/Filter';

function App() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Filter />
      {users.map(({ id, name, username, email, phone }) => (
        <div key={id} style={{ display: 'flex', gap: 50, marginBottom: 20 }}>
          <span>{name}</span>
          <span>{username}</span>
          <span>{email}</span>
          <span>{phone}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
