import UserRow from './UserRow/UserRow';
import { useAppSelector } from '../../hooks/redux/reduxHooks';
import { selectVisibleUsers } from '../../redux/users/selectors';
import css from './UserTable.module.css';

const UserTable = () => {
  //   console.log('Render UserTable');
  const users = useAppSelector(selectVisibleUsers);

  return (
    <table className={css.userTable}>
      <thead>
        <tr className={css.userTableHeadRow}>
          <th className={css.userTableHead}>{'Name'}</th>
          <th className={css.userTableHead}>{'Username'}</th>
          <th className={css.userTableHead}>{'Email'}</th>
          <th className={css.userTableHead}>{'Phone'}</th>
        </tr>
      </thead>
      <tbody className={css.userTableBody}>
        {users.map(({ id, name, username, email, phone }) => (
          <UserRow key={id} name={name} username={username} email={email} phone={phone} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
