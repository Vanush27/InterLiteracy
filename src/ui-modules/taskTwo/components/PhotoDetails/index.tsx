import React, {memo} from 'react';
import {View, Image} from 'react-native';

import {useStyles} from './PhotoDetails.useStyles';
import {IPhoto} from '../../types';

interface IProductsDetailsProps {
  item: IPhoto;
  height: number;
}
const PhotoDetails = ({item, height}: IProductsDetailsProps) => {
  const {styles} = useStyles(height);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={{uri: item.url}} style={styles.image} />
      </View>
    </View>
  );
};

export default memo(PhotoDetails);
