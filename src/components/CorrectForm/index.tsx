import styles from './index.module.scss';

import cn from 'classnames';

import { Input } from '../Input';
import { Button } from '../Button';
import { Form, Formik, FormikErrors } from 'formik';
import { FC } from 'react';
import { UserProps } from '../../types/types';
import { Title } from '../Title';

interface FormProps {
  className?: string;
  user: UserProps;
}

interface FormValues {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  access: boolean;
  birthDate: string;
}

const CorrectForm: FC<FormProps> = ({ className, user }) => {
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
  console.log('user', user);

  return (
    <>
      <Formik
        initialValues={{
          id: user.id ? user.id : new Date().toISOString(),
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          access: user.access,
          birthDate: user.birthDate,
        }}
        validateOnMount
        validateOnChange
        validate={validate}
        onSubmit={(values) => {
          console.log('values', values);
        }}
      >
        <Form className={cn(styles.form, className)}>
          <Title className={styles.form__title} type='extra'>
            Изменить данные
          </Title>
          <div className={styles.form__group}>
            <Input name={'firstName'} type={'text'} placeholder={'Имя*'} />
            <Input name={'lastName'} type={'text'} placeholder={'Фамилия*'} />
            <Input name={'email'} type={'text'} placeholder={'Email*'} />
            <Input
              name={'birthDate'}
              type={'text'}
              placeholder={'Дата рождения*'}
            />
            <Input
              name={'access'}
              type={'checkbox'}
              placeholder={'Дата рождения*'}
            />
          </div>
          <Button type='submit'>Перезаписать</Button>
        </Form>
      </Formik>
    </>
  );
};

export { CorrectForm };
