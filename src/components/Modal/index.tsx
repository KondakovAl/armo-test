import styles from './index.module.scss';

import cn from 'classnames';

import ReactDom from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  hide: () => void;
}

const Modal = ({ children, className, hide }: ModalProps) => {
  return ReactDom.createPortal(
    <>
      <div
        className={cn(styles.modal)}
        tabIndex={0}
        role='dialog'
        onClick={hide}
      >
        <div
          className={styles.modal__wrapper}
          onClick={(evt) => evt.stopPropagation()}
        >
          {children}
          <button className={styles.modal__close} onClick={hide}>
            x
          </button>
        </div>
      </div>
    </>,
    document.getElementById('root-modal') as HTMLElement
  );
};

export { Modal };
