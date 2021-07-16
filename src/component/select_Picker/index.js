/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  ScrollView,
  TextInput,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import {icon_close, icon_dropdown} from './icon';
import ListItem from './ListItem';

var barheight;

Platform.OS === 'ios' ? (barheight = 0) : (barheight = StatusBar.currentHeight);

export default function index(props) {
  const {label, data, isSearch, value, onSelect, style} = props;

  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);

  const dataFilter = data.filter(
    item => item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0,
  );

  const _touchVisible = () => {
    setVisible(!visible);
  };

  return (
    <View style={[styles.container, style]}>
      <Text>{label}</Text>
      <TouchableOpacity onPress={_touchVisible}>
        <View style={styles.layout_touch}>
          <Text numberOfLines={1}>{value?.name}</Text>
          <Image
            source={{uri: `data:image/jpeg;base64,${icon_dropdown}`}}
            style={styles.icon_dropdown}
          />
        </View>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              {isSearch ? (
                <TextInput
                  style={styles.input_modal_search}
                  value={search}
                  onChangeText={text => setSearch(text)}
                />
              ) : null}
              {dataFilter.length > 0
                ? dataFilter.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        onSelect(dataFilter[index]);
                        _touchVisible();
                        setSearch('');
                      }}>
                      <ListItem item={item} />
                    </TouchableOpacity>
                  ))
                : null}
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.btn_close} onPress={_touchVisible}>
            <View style={styles.layout_btn_close}>
              <Image
                source={{uri: `data:image/jpeg;base64,${icon_close}`}}
                style={styles.icon_close}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  icon_dropdown: {
    height: 12,
    width: 12,
    tintColor: '#000',
    position: 'absolute',
    right: 10,
  },
  layout_touch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    minHeight: 46,
    marginTop: 5,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',
  },
  centeredView: {
    flex: 1,
    paddingTop: barheight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0005',
  },
  modalView: {
    backgroundColor: 'white',
    maxHeight: height * 0.7,
    width: width,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input_modal_search: {
    height: 46,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#707070',
    marginVertical: 5,
  },
  btn_close: {marginTop: 20},
  layout_btn_close: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_close: {
    height: 20,
    width: 20,
    tintColor: '#000',
  },
});
