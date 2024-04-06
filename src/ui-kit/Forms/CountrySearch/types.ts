export type TCountryFormShape = {
  city: string;
};

import {
  UseFormProps as UseReactHookFormProps,
  UseFormReturn,
} from 'react-hook-form';
import {KeyboardTypeOptions, ReturnKeyType} from 'react-native';
import {ReactNode} from 'react';

export type FormField<T extends FormFieldNames> = {
  // eslint-disable-next-line no-unused-vars
  [FieldName in T]: {
    name: string;
    label?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    strengthMeter?: boolean;
    returnKeyType?: ReturnKeyType;
    blurOnSubmit?: boolean;
    mask?: (string | RegExp)[];

    renderErrMessage?: boolean;
  };
};

export type FormFieldNames = 'city';

export type FieldShapeLookup<K extends FormFieldNames> = {
  [P in K]?: Record<FormFieldNames, unknown>[P];
};

export type UseFormProps<
  K extends FormFieldNames,
  T extends FieldShapeLookup<K>,
> = {
  schemaKeys: K[];
  defaultValues?: UseReactHookFormProps<T>['defaultValues'];
  options?: Omit<UseReactHookFormProps<T>, 'defaultValues'>;
};

export type FormWrapperProps<T extends Record<string, unknown>> = {
  formMethods: UseFormReturn<T>;
  children: ReactNode;
};
