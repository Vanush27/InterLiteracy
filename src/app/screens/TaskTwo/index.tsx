import React from 'react';
import {SafeAreaView} from 'react-native';

import {useStyles} from './TaskTwo.useStyles';
import {Photos} from '@ui-modules';

const TaskTwo = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Photos />
    </SafeAreaView>
  );
};

export default TaskTwo;
