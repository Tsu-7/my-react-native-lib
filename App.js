import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screen/home/index';
import DetailsScreen from './src/screen/detail/index';

const Stack = createStackNavigator();

function App() {
  const deeplink = {
    prefixes: ['https://mychat.app', 'mychat://'],
    config: {
      Home: 'HomePath',
      Details: {
        path: 'Details/:itemId',
        params: {
          itemId: null,
        },
      },
    },
  };
  return (
    <NavigationContainer linking={deeplink}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
