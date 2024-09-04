import { IUserRowProps } from './interfaces/UserRowProps.interface';
import { FIELDS } from '../../../constants/fields';
import css from './UserRow.module.css';

const UserRow = (userRowProps: IUserRowProps) => {
  return (
    <tr className={css.userTableRow}>
      {FIELDS.map(field => (
        <td key={field} className={css.userTableCell}>
          {userRowProps[field]}
        </td>
      ))}
    </tr>
  );
};

export default UserRow;
