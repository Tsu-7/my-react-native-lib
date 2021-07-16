/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as _ from 'lodash';
import icon_img from './icon.png';

export default function Tree_node(props) {
  const {data, checks, onCheck, expands, onExpand} = props;
  const [name, setName] = React.useState(data.name ?? '');

  const handleCheck = async value => {
    if (value) onCheck(Array.from(new Set(_.concat(checks, [name]))));
    else onCheck(Array.from(new Set(_.remove(checks, e => e !== name))));
  };

  const handleIcon = async () => {
    _.filter(expands, e => e === name).length > 0
      ? onExpand(Array.from(new Set(_.remove(expands, e => e !== name))))
      : onExpand(Array.from(new Set(_.concat(expands, [name]))));
  };

  return (
    <View style={styles.node}>
      <View style={styles.text}>
        <TouchableOpacity onPress={handleIcon}>
          <Image source={icon_img} style={styles.icon} />
        </TouchableOpacity>
        <BouncyCheckbox
          size={15}
          isChecked={_.filter(checks, e => e === data.name).length > 0}
          onPress={handleCheck}
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
