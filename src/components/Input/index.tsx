import { FC } from 'react';

import styles from './index.module.scss';

import cn from 'classnames';

import { useField } from 'formik';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
}

const Input: FC<InputProps> = ({ type, className, placeholder, name }) => {
  const [field, meta] = useField(name);

  return (
    <label className={cn(styles.input, className)}>
      <input
        className={cn(styles.input__field)}
        type={type}
        placeholder={placeholder}
        {...field}
        autoComplete={'off'}
      />
      {meta.touched && meta.error ? (
        <div className={styles.input__field_error}>{meta.error}</div>
      ) : null}
    </label>
  );
};

export { Input };
