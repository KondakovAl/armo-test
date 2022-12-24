import { FC, useRef } from 'react';
import styles from './index.module.scss';

import cn from 'classnames';
import { onFilterCell } from '../../types/types';

import { SearchIcon } from '../../assets/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface PopupProps {
  onFilter: (cell: onFilterCell, value: string | boolean) => void;
  type: onFilterCell;
  value: string | boolean;
}

interface accessTypeProps {
  name: string;
  boolean: boolean;
}

const Popup: FC<PopupProps> = ({ onFilter, type, value }) => {
  const filter = useSelector((state: RootState) => state.filter);

  const accessType: accessTypeProps[] = [
    { name: 'access', boolean: true },
    { name: 'denied', boolean: false },
  ];

  return (
    <div
      className={cn(styles.popup, { [styles.popup_access]: type === 'access' })}
    >
      {type !== 'access' && (
        <>
          <SearchIcon />
          <input
            className={styles.popup__field}
            type={'text'}
            onChange={(event) => onFilter(type, event.target.value)}
            value={String(value)}
            autoFocus
          />
        </>
      )}
      {type === 'access' && (
        <>
          {accessType.map((item: accessTypeProps, i: number) => (
            <label className={styles.popup__label} key={i}>
              <input
                className={styles.popup__radio_real}
                type={'radio'}
                name={type}
                onChange={() => onFilter(type, item.boolean)}
                checked={filter.access === item.boolean}
              />
              <span className={styles.popup__radio_custom} />
              <span className={styles.popup__radio_name}>{item.name}</span>
            </label>
          ))}
        </>
      )}
    </div>
  );
};

export { Popup };
