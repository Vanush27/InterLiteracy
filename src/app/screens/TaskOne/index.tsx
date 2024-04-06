import React from 'react';
import {SafeAreaView} from 'react-native';

import {useStyles} from './TaskOne.useStyles';
import {Images} from '@ui-modules';

const TaskOne = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Images />
    </SafeAreaView>
  );
};

export default TaskOne;
