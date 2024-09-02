import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/reduxHooks';
import { fetchUsers } from '../../redux/users/operations';
import { selectUsers } from '../../redux/users/selectors';

function App() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {users.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
}

export default App;
