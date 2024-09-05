import { useAppSelector } from '../../hooks/redux/reduxHooks';
import { selectVisibleUsers, selectIsFetching, selectError } from '../../redux/users/selectors';

import Loader from '../Loader/Loader';
import UserRow from './UserRow/UserRow';
import Message from '../Message/Message';

import { MessageType, ERROR_MESSAGE, NO_DATA_MESSAGE } from '../../constants/messages';
import { FIELDS } from '../../constants/fields';
import { USERS_TABLE_CAPTION } from '../../constants/table';

import css from './UserTable.module.css';

const UserTable = () => {
  const users = useAppSelector(selectVisibleUsers);
  const isFetching = useAppSelector(selectIsFetching);
  const error = useAppSelector(selectError);

  const shouldShowTableInfoBox = isFetching || !!error || !users.length;

  return (
    <div className={css.userTableContainer}>
      <table className={css.userTable}>
        <caption className="visually-hidden">{USERS_TABLE_CAPTION}</caption>
        <thead>
          <tr className={css.userTableHeadRow}>
            {FIELDS.map(field => (
              <th key={field} scope="col" className={css.userTableHead}>
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

      {shouldShowTableInfoBox && (
        <div className={css.userTableInfoBox}>
          {isFetching && <Loader />}
          {!!error && !isFetching && <Message type={MessageType.ERROR} text={ERROR_MESSAGE + ': ' + error.message} />}
          {!users.length && !isFetching && !error && <Message text={NO_DATA_MESSAGE} />}
        </div>
      )}
    </div>
  );
};

export default UserTable;
