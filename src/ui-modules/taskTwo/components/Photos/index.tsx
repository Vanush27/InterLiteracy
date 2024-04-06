import React, {useEffect, useRef, useState} from 'react';
import {Text} from '@ui-kit';
import {getPhotos} from '@api';

import {IPhoto, TOnScrollHandler} from '../../types';
import PhotoDetails from '../PhotoDetails';

import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {DIMENSIONS_HEIGHT} from '@constants';

import {useStyles} from './Photos.useStyles';

const height = 200;

const Photos = () => {
  const {styles} = useStyles();

  const flatlistRef = useRef(null);
  const defaultImageCount = Math.round((DIMENSIONS_HEIGHT - height) / height);

  const [images, setPhotos] = useState<IPhoto[]>([]);

  const getAllPhotos = async () => {
    try {
      const allPhotos = await getPhotos();

      setPhotos(allPhotos);
    } catch (e) {
      console.error(e, 'Photos Screen');
    }
  };

  useEffect(() => {
    getAllPhotos();
  }, []);

  const [count, setCount] = useState(defaultImageCount);
  const scrollHandler = useAnimatedScrollHandler<TOnScrollHandler>({
    onScroll: e => {
      const y = e.contentOffset.y;

      const scrollValue =
        DIMENSIONS_HEIGHT / height + (y - DIMENSIONS_HEIGHT) / height;

      if (y > DIMENSIONS_HEIGHT) {
        const fff = Math.round(scrollValue + defaultImageCount);
        runOnJS(setCount)(fff);
      } else if (y < 0) {
        runOnJS(setCount)(defaultImageCount);
      }
    },
  });

  return (
    <>
      <Animated.FlatList
        ref={flatlistRef}
        data={images}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => {
          return item.title + index;
        }}
        renderItem={({item}) => <PhotoDetails item={item} height={height} />}
        onScroll={scrollHandler}
        removeClippedSubviews
        onEndReachedThreshold={0.2}
        updateCellsBatchingPeriod={100}
      />
      <Text style={styles.text}>count: {count}</Text>
    </>
  );
};

export default Photos;
