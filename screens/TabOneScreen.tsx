import * as React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

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

      <Income style={styles.container}/>
        <Button 
          title={'Do stuff'}
          onPress={() => console.log('Yay you can do stuff!')} //change-income() call here
        />

      <Categories title={'Budgeting Categories'}/>

      
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer:{
    flex: 1,
    alightItems: 'left',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
