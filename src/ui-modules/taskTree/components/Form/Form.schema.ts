import {Schema} from 'yup';
import * as yup from 'yup';

export const validationSchema: Schema<TSignInForm> = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .matches(
      /^[а-яА-Я]+(?:\s*[а-яА-Я]+)*$/,
      'Имя должно содержать только буквы кириллицы и не содержать пробелы',
    )
    .required('Обязательное поле'),

  description: yup
    .string()
    .matches(
      /^[а-яА-Я]+(?:\s*[а-яА-Я]+)*$/,
      'Описание должно содержать только буквы кириллицы и не содержать пробелы',
    )
    .min(10, 'Description should be at least 10 characters')
    .required('Обязательное поле'),
});

export type TSignInForm = {
  name: string;
  description: string;
};
