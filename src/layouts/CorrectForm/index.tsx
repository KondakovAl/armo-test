import styles from './index.module.scss';

import cn from 'classnames';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Form, Formik, FormikErrors } from 'formik';
import { FC } from 'react';
import { Title } from '../../components/Title';
import { CheckboxInput } from '../../components/CheckboxInput';

interface FormProps {
  className?: string;
  hide: () => void;
  initialValues: FormValues;
  handleSubmit: (values: FormValues) => void;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

interface FormValues {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  access: boolean;
  birthDate: string;
}

const CorrectForm: FC<FormProps> = ({
  className,
  hide,
  initialValues,
  handleSubmit,
  isError,
  isLoading,
  isSuccess,
}) => {
  const validate = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    const nameRegex = /^[a-zA-Zа-яёА-ЯЁ\s]+$/u;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!values.firstName) {
      errors.firstName = 'Обязательное поле';
    } else if (!nameRegex.test(values.firstName)) {
      errors.firstName = 'Введите корректное имя';
    }

    if (!values.lastName) {
      errors.lastName = 'Обязательное поле';
    } else if (!nameRegex.test(values.lastName)) {
      errors.lastName = 'Введите корректное фамилию';
    }

    if (!values.email) {
      errors.email = 'Обязательное поле';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Введите корректный email';
    }

    if (!values.birthDate) {
      errors.birthDate = 'Обязательное поле';
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnChange
        validate={validate}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className={cn(styles.form, className)}>
          <Title className={styles.form__title} type='extra'>
            Изменить данные
          </Title>
          <div className={styles.form__group}>
            <Input
              name={'firstName'}
              type={'text'}
              placeholder={'First Name*'}
            />
            <Input name={'lastName'} type={'text'} placeholder={'Last Name*'} />
            <Input name={'email'} type={'text'} placeholder={'Email*'} />
            <Input
              name={'birthDate'}
              type={'text'}
              placeholder={'Birth Date*'}
            />
            <CheckboxInput name={'access'} checked={initialValues.access} />
          </div>
          <Button type='submit' className={styles.form__button}>
            {isLoading
              ? 'Loading...'
              : isSuccess
              ? 'Success'
              : isError
              ? 'Error, try later'
              : 'Overwrite'}
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export { CorrectForm };
