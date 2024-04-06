import React, {useEffect, useState} from 'react';
import {FormWrapper, useForm, useDebounce, useCountry} from '@hooks';

import Search1Icon from 'react-native-vector-icons/AntDesign';
import {searchFormFields, searchSchemaKeys} from './fields';
import {CountryList} from '@ui-modules';
import {getCitiesList} from '@api';
import {Input} from '@components';

import {TCountryFormShape} from './types';
import {useStyles} from './styles';

const CountrySearchForm = () => {
  const {formMethods} = useForm<keyof TCountryFormShape, TCountryFormShape>({
    schemaKeys: searchSchemaKeys,
  });

  const {styles} = useStyles();

  const [loading, setLoading] = useState(false);

  const [cityFilter, setCityFilter] = useState([]);

  const {dispatchSetCityName, cityName} = useCountry();
  const debouncedValue = useDebounce<string>(cityName);

  const handleChangeName = async () => {
    if (cityName === '') {
      dispatchSetCityName('');
      setCityFilter([]);
    } else {
      setLoading(true);
      const nameCity = await getCitiesList(cityName);
      setCityFilter(nameCity);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleChangeName();
  }, [debouncedValue]);

  return (
    <>
      <FormWrapper {...{formMethods}}>
        <Input
          inputContainerStyle={styles.container_input}
          {...searchFormFields.city}
          label="city label"
          name="Enter City Name"
          icon={
            cityName === '' ? (
              <Search1Icon name="search1" size={18} />
            ) : undefined
          }
          onChangeText={country => dispatchSetCityName(country)}
        />
        <CountryList data={cityFilter} loading={loading} />
      </FormWrapper>
    </>
  );
};
export default CountrySearchForm;
