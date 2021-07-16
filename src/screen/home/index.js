/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Picker from '../../component/select_Picker/index';
import CheckboxTree from '../../component/Categories/checkbox_tree';

const dataPicker = [
  {
    name: 'Việt Nam',
    slug: 'viet-nam',
    image:
      'https://product.hstatic.net/200000122283/product/c-e1-bb-9d-vi-e1-bb-87t-nam_2c0683597d2d419fac401f51ccbae779_grande.jpg',
  },
  {
    name: 'English',
    slug: 'english',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/300px-Flag_of_the_United_Kingdom.svg.png',
  },
  {
    name: 'Japan',
    slug: 'japan',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAAZlBMVEX///+8AC3JM1fADzn56OzrssDmobK+CTTvw87SVXPdf5bBEjz++/zfhZvPSmrbd4/FIknXZoH78PPLO17jlaj34OXZboj99vjpqrntu8fkmqzikKTKNlnUXXrEHkbHK1DORGXxy9TffbWsAAACvElEQVR4nO3ciXaiQBAF0BSgQCSguIJRxv//yZFxiUyQtThVNO9+Qb/TQFdvfHwAAAAAAAAAAAAAAAAAjIuTpLvQWp5tss9LK9yliSPdJEbOLLLot+VqvpVuGod4/qck3YN1jKUb2JPnuxX5cq7vSTeyBy+siXeznkk3tCOv7OUr9z3GfnROjfPl/NF9Wjd2q4BE9ka6ya3Efst8uXBEn9XLskNAovNo3sa0boR4x02lm97MV8d8uU/pxjcR9QhItJNufr1Vr4BEK+kAdfr1YE75g7rpHZDoKB2iyoEhIJHiMnW7YEloq502Bt8sAa+FeCAd5Y0dU0C1Y4bHFpBIZf0WNJ8O1ss0PqdHxoBECudSTtsJYTVb34y4fzFTFEkH+l/M24XXTtQ2H/5kDkj0JR2paM9Tzbxa7KVDFfAUpEUH6VAFzZZ+2wmlQ71yBghIpGnA4B3tHzSN+kM8pKoe04B7MLyx9RSnnLOKVxfpYE99Vkir6Bn0u+xSNOFLB3vKBkqYSQd76rpPUceVDvawHSggkZZFt2SwhIl0tLshyu4bLWvD88ESzqWj3Q1Tlea0VKZDDfh6hnzzE5r/lJr/pTF/tDB/xDe/ajO/8p7A7Mn8GbD5qxjmr0SZv5po/orwBFb1nSFGRFfTzoz5u2sT2CE1f5fb/JMKEzhtwn5iSN9haO5TX+q6cAIn93hPX1qKStIfF8aEemYVBXynoNUdTLwL1kwB1Z5k57qNsFCzxPbbjCWhlnXgUsbfCprAza4J3M6bwA3LfuWb+kf0Zt75prOW/cJaXW+rK63Vyhj/x4GrtG15sxjJXfwfcbs6/KRqcbQhr/mV0rXK+4YNmP4HnlyDvyidxtp/D/tDVUeu03F9QN+Ikzd/MzsYEe/O8dIotLJ/f6TLrDBKvTF+PAEAAAAAAAAAAAAAAGDa/gIRxCmfgi0a5wAAAABJRU5ErkJggg==',
  },
  {
    name: 'China',
    slug: 'china',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKK2_BqdwrNf0oQa38wjagVGXGEtBGq9ZBEjHuuwTygZp78W2Zk_xOaa4tBGaEqzS0vA0&usqp=CAU',
  },
];

const dataCategories = [
  {
    name: 'name 1',
    children: [
      {
        name: 'name 1-1',
        children: [
          {
            name: 'name 1-1-1',
          },
          {
            name: 'name 1-1-2',
          },
        ],
      },
      {
        name: 'name 1-2',
      },
    ],
  },
  {
    name: 'name 2',
    children: [
      {
        name: 'name 2-1',
      },
      {
        name: 'name 2-2',
      },
    ],
  },
  {
    name: 'name 3',
    children: [
      {
        name: 'name 3-1',
      },
    ],
  },
];

export default function index(props) {
  const [selected, setSelected] = useState(null);
  const [checks, setChecks] = useState(['name 1-1', 'name 3-1']);
  const [expands, setExpands] = useState(['name 1']);
  console.log('list', expands);
  return (
    <View style={styles.container}>
      {/* <Picker
        label="select Country"
        data={dataPicker}
        isSearch={true}
        value={selected}
        onSelect={setSelected}
        style={styles.picker}
      /> */}
      <CheckboxTree
        data={dataCategories}
        checks={checks}
        expands={expands}
        onCheck={setChecks}
        onExpand={setExpands}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 10},
});
