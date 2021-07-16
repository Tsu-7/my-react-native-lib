/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as _ from 'lodash';

export default function Tree_node(props) {
  const {data, checks, onCheck} = props;
  const [name, setName] = React.useState(data.name ?? '');
  const [checked, setChecked] = React.useState();

  React.useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const isNull = (await _.filter(checks, e => e === data.name).length) > 0;
    setChecked(isNull);
  };

  const handleCheck = async value => {
    if (value) onCheck(Array.from(new Set(_.concat(checks, [name]))));
    else onCheck(Array.from(new Set(_.remove(checks, e => e !== name))));
  };

  return (
    <View style={{marginLeft: 20}}>
      <View style={{flexDirection: 'row'}}>
        <BouncyCheckbox size={15} isChecked={checked} onPress={handleCheck} />
        <Text>{name}</Text>
      </View>
      {data.children && data.children.length > 0
        ? data.children.map((e, index) => (
            <Tree_node data={e} key={index} checks={checks} onCheck={onCheck} />
          ))
        : null}
    </View>
  );
}
