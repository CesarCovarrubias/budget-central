import * as React from 'react';
import { constructor, useState } from 'react';
import { StyleSheet, TextInput, Button, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { Dropmenu } from '../components/Dropmenu';
import EditScreenInfo from '../components/EditScreenInfo';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
 
  const [item, setItem] = useState<String>(" ");
  const [cost, setCost] = useState<Number>(0)
  const [category, setCategory] = useState<String>();

  //-------------------------------------------------------
  return (
    //a lot of what is on this second screen is just for testing purposes
    <View style={styles.container}>
      <Dropmenu></Dropmenu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
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
