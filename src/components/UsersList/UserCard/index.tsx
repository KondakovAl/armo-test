import styles from './index.module.scss';

import { FC } from 'react';
import { UserProps } from '../../../types/types';
import { CorrectIcon, DeleteIcon } from '../../../assets/icons';

import cn from 'classnames';
import { Modal } from '../../Modal';
import { useModal } from '../../../hooks/useModal';
import { CorrectForm } from '../../CorrectForm';
import { CSSTransition } from 'react-transition-group';

interface IUserCard {
  user: UserProps;
  handleDeleteUser: (id: number) => void;
}

interface IUserFields {
  field: string | boolean;
}

const UserCard: FC<IUserCard> = ({ user, handleDeleteUser }) => {
  const { isShowing, toggle } = useModal();

  const userFields: IUserFields[] = [
    { field: user.firstName },
    { field: user.lastName },
    { field: user.email },
    { field: user.birthDate },
    { field: user.access },
  ];

  return (
    <>
      <tr className={styles.row}>
        {userFields.map((el: IUserFields, i: number) => (
          <td className={styles.row__item} key={i}>
            {typeof el.field !== 'boolean' ? (
              <>{el.field}</>
            ) : (
              <span
                className={cn(styles.row__item_dot, {
                  [styles.row__item_dot_access]: el.field,
                  [styles.row__item_dot_denied]: !el.field,
                })}
              />
            )}
          </td>
        ))}
        <td className={styles.row__item}>
          <CorrectIcon className={styles.row__item_icon} onClick={toggle} />
        </td>
        <td className={styles.row__item}>
          <DeleteIcon
            className={styles.row__item_icon}
            onClick={() => handleDeleteUser(user.id)}
          />
        </td>
      </tr>
      <CSSTransition
        in={isShowing}
        timeout={400}
        classNames={{
          enterActive: styles.modal_enter_active,
          enterDone: styles.modal_enter_done,
          exitActive: styles.modal_exit_active,
          exit: styles.modal_exit,
        }}
        mountOnEnter
        unmountOnExit
      >
        <Modal hide={toggle}>
          <CorrectForm user={user} />
        </Modal>
      </CSSTransition>
    </>
  );
};

export { UserCard };
