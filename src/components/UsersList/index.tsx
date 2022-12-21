import styles from './index.module.scss';

import cn from 'classnames';

import { FC, useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import {
  useDeleteUserMutation,
  useFetchAllUsersQuery,
} from '../../store/usersSlice';
import { Pagination } from '../Pagination';

interface UsersListProps {
  className?: string;
}

const UsersList: FC<UsersListProps> = ({ className }) => {
  const [page, setPage] = useState<number>(1);
  const limit: number = 10;

  const { data, isSuccess } = useFetchAllUsersQuery(page);
  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = (id: number) => {
    console.log('delete good ', id);
    deleteUser(id);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      console.log(page);

      if (data.apiResponse.lenght === 0 && page !== 1) {
        setPage(page - 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {isSuccess && (
        <>
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
              {data.apiResponse.length > 0 &&
                data.apiResponse.map((user: any) => (
                  <UserCard
                    user={user}
                    key={user.id}
                    handleDeleteUser={handleDeleteUser}
                  />
                ))}
            </tbody>
          </table>
          {data.totalCount > limit && (
            <Pagination
              totalCount={data.totalCount}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          )}
        </>
      )}
    </>
  );
};

export { UsersList };
