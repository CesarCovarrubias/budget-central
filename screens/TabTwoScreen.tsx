import * as React from 'react';
import { constructor, useState } from 'react';
import { StyleSheet, TextInput, Button, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { Dropmenu } from '../components/Dropmenu';
import EditScreenInfo from '../components/EditScreenInfo';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

// Testing
import Category from '../data/category.json'
var dataTest = Category;

export default function TabTwoScreen() {
 
  const [item, setItem] = useState<String>(" ");
  const [cost, setCost] = useState<Number>(0)
  const [category, setCategory] = useState<String>();

  //-------------------------------------------------------
  const ItemPurchased = () => {

    return (
      <TextInput

        style={{
          height: 20,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
          setItem(e.nativeEvent.text)
        }}
      />
    );


  }

  const AmountSpent = () => {


    return (
      <TextInput

        style={{
          height: 20,
          borderColor: 'gray',
          borderWidth: 1,
        }}

        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => setCost(parseInt(e.nativeEvent.text))}
        keyboardType={'numeric'}
      //value = {value}    
      />
    );

  }

  const Finalize = () => {
    return (
      <View>
        <Dropmenu></Dropmenu>
        <ItemPurchased></ItemPurchased>
        <AmountSpent></AmountSpent>

        <Button
          onPress={() => console.log(Dropmenu.getState())}
          title='Submit'
        />
      </View>
    )

  }

  function adjustJSON() {
    let x = " "
    const add = () => {
      var RNFS = require('react-native-fs');

      var filePath = RNFS.DocumentDirectoryPath + '/items.json';

      RNFS.writeFile(filePath, '{name:hello}', 'utf8')
        .then((success) => {
          console.log('SUCCESS');
        })
        .catch((err) => {
          console.log(err.message);
        });
        x = RNFS.readdir(filePath)
    };
   console.log(x)
  }

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
