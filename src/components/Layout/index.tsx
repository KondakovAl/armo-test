import styles from './index.module.scss';

import cn from 'classnames';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={cn(styles.layout)}>
      <div className={styles.layout__wrapper}>{children}</div>
    </div>
  );
};

export { Layout };
