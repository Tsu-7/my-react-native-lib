import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function index(props) {
  const {itemId} = props.route.params;
  return (
    <View style={styles.container}>
      <Text>Details Screen: {itemId}</Text>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <View style={{height: 60, width: 120, backgroundColor: 'lightblue'}}>
          <Text>go to home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
