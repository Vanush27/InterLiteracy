import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {useStyles} from './Images.useStyles';
import {DIMENSIONS_WIDTH} from '@constants';

const IMAGE_SIZES = [150, 150, 200, 200, 100, 100];
// const IMAGE_SIZES = [150, 150, 200, 200, 100, 100, 100, 150];

const Images = () => {
  const {styles} = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Функция для разделения изображений на ряды с максимальной высотой в каждом ряду
    const createRows = () => {
      let currentRow = [];
      let currentRowWidth = 0;
      let maxRowHeight = 0;
      let newRows = [];

      IMAGE_SIZES.forEach(size => {
        if (currentRowWidth + size <= DIMENSIONS_WIDTH) {
          currentRow.push(size);
          currentRowWidth += size;
          maxRowHeight = Math.max(maxRowHeight, size);
        } else {
          newRows.push({images: currentRow, maxHeight: maxRowHeight});
          currentRow = [size];
          currentRowWidth = size;
          maxRowHeight = size;
        }
      });

      // Добавляем последний ряд
      newRows.push({images: currentRow, maxHeight: maxRowHeight});
      setRows(newRows);
    };

    createRows();
  }, []);

  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row'}}>
      {item.images.map((size, index) => (
        <View
          key={index}
          style={{
            height: item.maxHeight,
            width: size,
            backgroundColor: 'green',
            margin: 5,
          }}>
          <View style={{height: size, width: size, backgroundColor: 'red'}} />
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={rows}
        numColumns={1}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Images;
