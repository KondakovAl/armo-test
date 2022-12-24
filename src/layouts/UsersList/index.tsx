import styles from './index.module.scss';

import cn from 'classnames';

import { FC, useEffect, useState } from 'react';
import { UserCard } from './sections/UserCard';
import { useFetchAllUsersQuery } from '../../store/usersSlice';
import { Pagination } from '../Pagination';
import { Loader } from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { UsersHeader } from './sections/UsersHeader';
import { RootState } from '../../store/store';
import {
  setAllClosed,
  setIsAccessOpen,
  setIsBirthDateOpen,
  setIsEmailOpen,
  setIsFirstNameOpen,
  setIsLastNameOpen,
} from '../../store/popupsSlice';
import { onFilterCell } from '../../types/types';
import { clearAll } from '../../store/filterSlice';
import { Button } from '../../components/Button';

interface UsersListProps {
  className?: string;
}

const UsersList: FC<UsersListProps> = ({ className }) => {
  const [page, setPage] = useState<number>(1);
  const limit: number = 10;
  const indexOfLast = page * limit;
  const indexOfFirst = indexOfLast - limit;

  const popups = useSelector((state: RootState) => state.popups);
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const { data, isSuccess, isFetching } = useFetchAllUsersQuery('');

  const [dataSave, setDataSave] = useState<any>([]);

  const usersHead: {
    title: string;
    type: onFilterCell;
    filterValue: string | boolean;
    isOpen: boolean;
    setIsOpen: any;
  }[] = [
    {
      title: 'First Name',
      type: 'firstName',
      filterValue: filter.firstName,
      isOpen: popups.isFirstNameOpen,
      setIsOpen: setIsFirstNameOpen(),
    },
    {
      title: 'Last Name',
      type: 'lastName',
      filterValue: filter.lastName,
      isOpen: popups.isLastNameOpen,
      setIsOpen: setIsLastNameOpen(),
    },
    {
      title: 'Email',
      type: 'email',
      filterValue: filter.email,
      isOpen: popups.isEmailOpen,
      setIsOpen: setIsEmailOpen(),
    },
    {
      title: 'Birth Date',
      type: 'birthdate',
      filterValue: filter.birthdate,
      isOpen: popups.isBirthDateOpen,
      setIsOpen: setIsBirthDateOpen(),
    },
    {
      title: 'Access',
      type: 'access',
      filterValue: filter.access,
      isOpen: popups.isAccessOpen,
      setIsOpen: setIsAccessOpen(),
    },
  ];

  useEffect(() => {
    if (data) {
      if (data.slice(indexOfFirst, indexOfLast).length === 0 && page !== 1) {
        setPage((prev): number => prev - 1);
      }
      setDataSave(data);
      console.log(dataSave);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    console.log(filter);
    if (data) {
      const filtredArr = [...data];
      const newFiltredArr = filtredArr.filter((item) => {
        const firstNameCond = filter.firstName
          ? item.firstName.includes(filter.firstName)
          : true;
        const lastNameCond = filter.lastName
          ? item.lastName.includes(filter.lastName)
          : true;
        const emailCond = filter.email
          ? item.email.includes(filter.email)
          : true;
        const birthDateCond = filter.birthdate
          ? item.birthDate.includes(filter.birthdate)
          : true;
        const accessCond =
          item.access === filter.access || filter.access === '';
        if (
          firstNameCond &&
          lastNameCond &&
          emailCond &&
          birthDateCond &&
          accessCond
        ) {
          setPage(1);
          return item;
        }
      });
      setDataSave(newFiltredArr);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      {isSuccess && (
        <>
          <table
            className={cn(styles.table, {
              [styles.table__one_page]: dataSave.length < limit,
            })}
            border={1}
          >
            <thead className={cn(styles.table__head, styles.head)}>
              <tr className={styles.head__row}>
                {usersHead.map((header: any, i: number) => (
                  <UsersHeader key={i} header={header} />
                ))}
                <th className={styles.head__row} colSpan={2} align='center'>
                  <Button
                    onClick={() => {
                      dispatch(clearAll());
                      dispatch(setAllClosed());
                    }}
                    className={styles.head__button}
                  >
                    clearAll
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className={cn(styles.table__main, styles.main)}>
              {data.length > 0 &&
                dataSave
                  .slice(indexOfFirst, indexOfLast)
                  .map((user: any) => <UserCard user={user} key={user.id} />)}
              {dataSave.length === 0 && (
                <tr>
                  <td colSpan={6} align='center'>
                    Nothing found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {dataSave.length >= limit && (
            <Pagination
              totalCount={dataSave.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          )}
        </>
      )}
      {isFetching && <Loader />}
    </>
  );
};

export { UsersList };
