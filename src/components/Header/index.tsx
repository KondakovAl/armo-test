import styles from './index.module.scss';

import { FC } from 'react';
import { Title } from '../Title';
import { Button } from '../Button';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Title className={styles.header__title} type='main'>
        Users List
      </Title>
      <Button className={styles.header__button}>Add new</Button>
    </header>
  );
};

export { Header };
