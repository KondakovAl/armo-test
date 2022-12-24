import styles from './index.module.scss';

import { Title } from '../../components/Title';
import { Button } from '../../components/Button';

import { CSSTransition } from 'react-transition-group';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../../components/Modal';
import { CorrectForm, FormValues } from '../CorrectForm';
import { useAddUserMutation } from '../../store/usersSlice';

const Header = () => {
  const { isShowing, toggle } = useModal();
  const [addUser, { isLoading, isSuccess, isError }] = useAddUserMutation();

  const initialValues = {
    id: new Date().toISOString(),
    firstName: '',
    lastName: '',
    email: '',
    access: false,
    birthDate: '',
  };

  const handleSubmit = async (values: FormValues) => {
    await addUser(values);
    toggle();
  };

  return (
    <>
      <header className={styles.header}>
        <Title className={styles.header__title} type='main'>
          Users List
        </Title>
        <Button className={styles.header__button} onClick={toggle}>
          Add new
        </Button>
      </header>
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
          <CorrectForm
            hide={toggle}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
          />
        </Modal>
      </CSSTransition>
    </>
  );
};

export { Header };
