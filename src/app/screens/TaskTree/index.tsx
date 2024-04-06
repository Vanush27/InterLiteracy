import React from 'react';
import {SafeAreaView} from 'react-native';

import {useStyles} from './TaskTree.useStyles';
import {Form} from '@ui-modules';

const TaskTree = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Form />
    </SafeAreaView>
  );
};

export default TaskTree;
