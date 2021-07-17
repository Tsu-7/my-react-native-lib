/* eslint-disable no-const-assign */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import * as _ from 'lodash';
import icon_img from './icon.png';

export default function Tree_node(props) {
  const {data, checks, onCheck, expands, onExpand, listParent} = props;
  const [name, setName] = React.useState(data.name ?? '');

  // React.useEffect(() => {
  //   init();
  // }, [checks]);

  // const init = async () => {
  //   console.log(data.name, await childNode(data, []));
  // };

  const handleCheck = async value => {
    if (value) {
      onCheck(Array.from(new Set(_.concat(checks, listParent, [name]))));
    } else {
      const removeData = await Array.from(
        new Set(_.concat(await childNode(data, []), [name])),
      );
      onCheck(Array.from(new Set(_.difference(checks, removeData))));
    }
  };

  const handleIcon = async () => {
    _.filter(expands, e => e === name).length > 0
      ? onExpand(Array.from(new Set(_.remove(expands, e => e !== name))))
      : onExpand(Array.from(new Set(_.concat(expands, [name]))));
  };

  const childNode = async (data, listData) => {
    if (data.children) {
      for (let index = 0; index < data.children.length; index++) {
        const element = data.children[index];
        listData = Array.from(
          new Set(
            _.concat(
              listData,
              [element.name],
              await childNode(element, listData),
            ),
          ),
        );
      }
    } else listData = Array.from(new Set(_.concat(listData, [data.name])));
    return await listData;
  };

  return (
    <View style={styles.node}>
      <View style={styles.text}>
        <TouchableOpacity onPress={() => handleIcon()}>
          <Image source={icon_img} style={styles.icon} />
        </TouchableOpacity>
        <CheckBox
          disabled={false}
          value={_.filter(checks, e => e === data.name).length > 0}
          onValueChange={v => {
            console.log('v: ', v);
            handleCheck(v);
          }}
        />
        <Text>{name}</Text>
      </View>
      {_.filter(expands, e => e === data.name).length > 0
        ? data.children && data.children.length > 0
          ? data.children.map((e, index) => (
              <Tree_node
                data={e}
                key={index}
                checks={checks}
                onCheck={onCheck}
                expands={expands}
                onExpand={onExpand}
                listParent={_.concat(listParent, [name])}
              />
            ))
          : null
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  node: {marginLeft: 20},
  text: {flexDirection: 'row', alignItems: 'center'},
  icon: {height: 25, width: 25, tintColor: '#000'},
});
