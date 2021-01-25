import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Categories from '../components/Categories';
import { Text, View } from '../components/Themed';

const Income = (props) => {
  return (
    <TextInput
      keyboardType = {'number-pad'}
      editable
      placeholder = {'0.00'}
      maxLength={15}
    />
  )
}


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Main page</Text>

      <Categories title={'Budgeting Categories'}>

      </Categories>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
