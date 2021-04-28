import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ListItem(props) {
  const {item, index} = props;
  return (
    <View style={styles.container}>
      {item.image && item.image !== '' ? (
        <View style={styles.layout_img}>
          <Image style={styles.image} source={{uri: item?.image}} />
        </View>
      ) : null}
      <Text style={styles.text}>{item?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 46,
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
  layout_img: {
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxHeight: 36,
    minHeight: 25,
    maxWidth: 52,
    minWidth: 40,
    resizeMode: 'stretch',
  },
});
