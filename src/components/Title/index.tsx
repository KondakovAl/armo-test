import styles from './index.module.scss';

import cn from 'classnames';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  type: 'main' | 'extra';
}

const Title = ({ children, className, type }: TitleProps) => {
  return (
    <>
      {type === 'main' && (
        <h1 className={cn(styles.title, className)}>{children}</h1>
      )}
      {type === 'extra' && (
        <h2 className={cn(styles.title, className)}>{children}</h2>
      )}
    </>
  );
};

export { Title };
