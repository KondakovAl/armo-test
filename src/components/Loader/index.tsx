import styles from './index.module.scss';
import ReactDom from 'react-dom';

const Loader = () => {
  return ReactDom.createPortal(
    <>
      <div className={styles.loader}>
        <div className={styles.loader__ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>,
    document.getElementById('root-modal') as HTMLElement
  );
};

export { Loader };
