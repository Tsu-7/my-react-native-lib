import React from 'react';
import {View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Tree_node from './Tree_node';

export default function CheckboxTree(props) {
  const {data, checks, onCheck} = props;

  return (
    <View style={{flex: 1, marginLeft: -20}}>
      {data.length > 0
        ? data.map((e, index) => (
            <Tree_node data={e} key={index} checks={checks} onCheck={onCheck} />
          ))
        : null}
    </View>
  );
}
