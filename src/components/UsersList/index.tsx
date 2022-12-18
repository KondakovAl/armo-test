import styles from './index.module.scss';

import cn from 'classnames';

import { FC } from 'react';
import { UserCard } from './UserCard';
import { data } from '../../mock';
import { UserProps } from '../../types/types';

interface UsersListProps {
  className?: string;
}

const UsersList: FC<UsersListProps> = ({ className }) => {
  return (
    <table className={cn(styles.table, className)} border={1}>
      <thead className={cn(styles.table__head, styles.head)}>
        <tr className={styles.head__row}>
          <th className={styles.head__row_item}>First Name</th>
          <th className={styles.head__row_item}>Last Name</th>
          <th className={styles.head__row_item}>Email</th>
          <th className={styles.head__row_item}>BirthDate</th>
          <th className={styles.head__row_item}>Access</th>
        </tr>
      </thead>
      <tbody className={cn(styles.table__main, styles.main)}>
        {data.map((user: any) => (
          <UserCard user={user} />
        ))}
      </tbody>
    </table>
  );
};

export { UsersList };
