import {FormField, TCountryFormShape} from './types';

export const searchFormFields: FormField<keyof TCountryFormShape> = {
  city: {
    name: 'city',
    label: 'city',
    keyboardType: 'web-search',
    returnKeyType: 'search',
    blurOnSubmit: false,
  },
};
export const searchSchemaKeys = Object.keys(
  searchFormFields,
) as (keyof TCountryFormShape)[];
