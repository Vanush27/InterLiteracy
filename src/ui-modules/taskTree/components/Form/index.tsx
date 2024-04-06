import React from 'react';
import {useState} from 'react';
import {View, TextInput, Alert, Image, Button} from 'react-native';
import {Text} from '@ui-kit';
import {ErrorMessage, Formik} from 'formik';

import {launchImageLibrary} from 'react-native-image-picker';

import {useStyles} from './Form.useStyles';
import {validationSchema} from './Form.schema';

const Form = () => {
  const {styles} = useStyles();
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        const imageUri = response?.uri || response?.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        // Update the 'image' field in the form values
        setSelectedImage(imageUri);
      }
    });
  };

  const onSubmit = async values => {
    console.warn(values, 'wwwwjdjsdvbnm,');
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('image', {
        uri: selectedImage,
      });

      console.warn(formData, 'formData');
      // const response = await axios.post('YOUR_API_ENDPOINT', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      Alert.alert('Success', 'Form submitted successfully');
    } catch (error) {
      // Handle error
      Alert.alert('Error', 'Failed to submit form');
    }
  };

  const initialValues = {
    name: '',
    description: '',
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => onSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Name"
            />

            <Text style={styles.error}>
              <ErrorMessage name="name" />
            </Text>

            <TextInput
              style={styles.input}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              placeholder="Description"
            />
            <Text style={styles.error}>
              <ErrorMessage name="description" />
            </Text>

            <Button title="Выбрать изображение" onPress={openImagePicker} />

            {selectedImage && (
              <View style={styles.image_wrapper}>
                <Image
                  resizeMode="contain"
                  source={{uri: selectedImage}}
                  style={styles.image}
                />
              </View>
            )}
            <Text style={styles.error}>
              {!selectedImage && <ErrorMessage name="image" />}
            </Text>

            <Button onPress={() => handleSubmit()} title="Отправить" />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Form;
