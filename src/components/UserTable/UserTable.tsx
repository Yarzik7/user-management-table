import UserRow from './UserRow/UserRow';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { MessageType, ERROR_MESSAGE, NO_DATA_MESSAGE } from '../../constants/messages';
import { useAppSelector } from '../../hooks/redux/reduxHooks';
import { selectVisibleUsers, selectIsFetching, selectError } from '../../redux/users/selectors';
import { FIELDS } from '../../constants/fields';
import css from './UserTable.module.css';

const UserTable = () => {
  const users = useAppSelector(selectVisibleUsers);
  const isFetching = useAppSelector(selectIsFetching);
  const error = useAppSelector(selectError);

  return (
    <div className={css.userTableContainer}>
      <table className={css.userTable}>
        <thead>
          <tr className={css.userTableHeadRow}>
            {FIELDS.map(field => (
              <th key={field} className={css.userTableHead}>
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, username, email, phone }) => (
            <UserRow key={id} name={name} username={username} email={email} phone={phone} />
          ))}
        </tbody>
      </table>
      <div className={css.userTableInfoBox}>
        {isFetching && <Loader />}
        {!!error && !isFetching && <Message type={MessageType.ERROR} text={ERROR_MESSAGE + ': ' + error.message} />}
        {!users.length && !isFetching && !error && <Message text={NO_DATA_MESSAGE} />}
      </div>
    </div>
  );
};

export default UserTable;
