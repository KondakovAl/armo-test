import { FC } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, type, className, onClick }) => {
  return (
    <button
      className={cn(styles.button, className)}
      type={type ? type : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
