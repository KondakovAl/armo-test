import styles from './index.module.scss';

import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Popup } from '../../../../components/Popup';
import { FilterIcon } from '../../../../assets/icons';

import cn from 'classnames';
import {
  setAccess,
  setBirthDate,
  setEmail,
  setFirstName,
  setLastName,
} from '../../../../store/filterSlice';
import { onFilterCell } from '../../../../types/types';

interface UsersHeaderProps {
  header: {
    isOpen: boolean;
    setIsOpen: any;
    title: string;
    type: onFilterCell;
    filterValue: string | boolean;
  };
}

const UsersHeader: FC<UsersHeaderProps> = ({ header }) => {
  const dispatch = useDispatch();

  const onFilter = (cell: onFilterCell, value: string | boolean) => {
    const filterObject = {
      firstName: setFirstName(value),
      lastName: setLastName(value),
      email: setEmail(value),
      birthdate: setBirthDate(value),
      access: setAccess(value),
    };
    dispatch(filterObject[cell]);
  };

  return (
    <>
      <th className={styles.head}>
        <div
          className={styles.head__wrapper}
          onClick={() => dispatch(header.setIsOpen)}
        >
          <span className={styles.head__title}>{header.title}</span>
          <FilterIcon
            className={cn(styles.head__filter, {
              [styles.head__filter_active]: header.isOpen,
            })}
          />
        </div>
        <CSSTransition
          in={header.isOpen}
          timeout={400}
          classNames={{
            enterActive: styles.popup_enter_active,
            enterDone: styles.popup_enter_done,
            exitActive: styles.popup_exit_active,
          }}
          mountOnEnter
          unmountOnExit
        >
          <Popup
            onFilter={onFilter}
            type={header.type}
            value={header.filterValue}
          />
        </CSSTransition>
      </th>
    </>
  );
};

export { UsersHeader };
