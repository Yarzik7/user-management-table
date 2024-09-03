import { IUserRowProps } from './interfaces/UserRowProps.interface';
import css from './UserRow.module.css';

const UserRow = ({ name, username, email, phone }: IUserRowProps) => {
  //   console.log('Render UserRow');
  return (
    <tr className={css.userTableRow}>
      <td className={css.userTableCell}>{name}</td>
      <td className={css.userTableCell}>{username}</td>
      <td className={css.userTableCell}>{email}</td>
      <td className={[css.userTableCell, css.userTablePhoneCell].join(' ')}>{phone}</td>
    </tr>
  );
};

export default UserRow;
