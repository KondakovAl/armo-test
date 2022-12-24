import { FC, useState } from 'react';

import styles from './index.module.scss';

import cn from 'classnames';

import { useField } from 'formik';

interface CheckboxInputProps {
  name: string;
  className?: string;
  checked: boolean;
}

const CheckboxInput: FC<CheckboxInputProps> = ({
  className,
  name,
  checked,
}) => {
  const [inputChecked, setInputChecked] = useState<boolean>(checked);
  const [field, meta] = useField(name);

  return (
    <label className={cn(styles.input, className)}>
      <span className={styles.input__title}>{name}</span>
      <input
        className={cn(styles.input__field)}
        type={'checkbox'}
        checked={inputChecked}
        {...field}
        autoComplete={'off'}
        onInput={() => setInputChecked(!inputChecked)}
      />
      <span
        className={cn(styles.input__checkbox, {
          [styles.input__checkbox_access]: inputChecked,
          [styles.input__checkbox_denied]: !inputChecked,
        })}
      />
      {meta.touched && meta.error ? (
        <div className={styles.input__field_error}>{meta.error}</div>
      ) : null}
    </label>
  );
};

export { CheckboxInput };
